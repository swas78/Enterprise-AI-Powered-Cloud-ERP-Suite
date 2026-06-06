import { saveOfflineTransaction } from '../utils/indexedDb';

export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

export const getActiveUser = () => {
  const cached = localStorage.getItem('user');
  try {
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

let csrfToken: string | null = null;

export const initCsrf = async () => {
  try {
    const res = await fetch('/api/v1/auth/csrf-token');
    if (res.ok) {
      const data = await res.json();
      csrfToken = data.csrfToken;
    }
  } catch (e) {
    console.error('Failed to fetch CSRF token', e);
  }
};

export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

export const apiFetch = async (url: string, options: RequestOptions = {}): Promise<Response> => {
  const token = getAuthToken();
  const user = getActiveUser();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (csrfToken && options.method && !['GET', 'HEAD', 'OPTIONS'].includes(options.method.toUpperCase())) {
    headers['X-CSRF-Token'] = csrfToken;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (user?.tenantId) {
    headers['X-Tenant-ID'] = user.tenantId;
  }

  // Intercept POST request if offline to write to IndexedDB (F-12 Sync)
  if (navigator.onLine === false && options.method === 'POST') {
    if (url.includes('/finance/ledger/entries') && options.body) {
      await saveOfflineTransaction('ledger', JSON.parse(options.body as string));
      throw new Error('OFFLINE_SAVED');
    }
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });

    if (response.status === 401 && !url.includes('/auth/refresh') && !url.includes('/auth/login') && !url.includes('/auth/verify-otp')) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const refreshRes = await fetch('/api/v1/auth/refresh', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ refreshToken })
            });

            if (refreshRes.ok) {
              const data = await refreshRes.json();
              const { accessToken, refreshToken: newRt } = data.data;
              localStorage.setItem('token', accessToken);
              localStorage.setItem('refreshToken', newRt);
              
              isRefreshing = false;
              onRefreshed(accessToken);

              headers['Authorization'] = `Bearer ${accessToken}`;
              return await fetch(url, { ...options, headers, signal: controller.signal });
            } else {
              // Refresh failed
              localStorage.removeItem('token');
              localStorage.removeItem('refreshToken');
              localStorage.removeItem('user');
              window.location.href = '/';
              throw new Error('Session expired');
            }
          } catch (e) {
            isRefreshing = false;
            throw e;
          }
        } else {
          // Wait for the current refresh process
          return new Promise<Response>((resolve) => {
            subscribeTokenRefresh((newToken) => {
              headers['Authorization'] = `Bearer ${newToken}`;
              resolve(fetch(url, { ...options, headers, signal: controller.signal }));
            });
          });
        }
      }
    }

    return response;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Server request timed out. Please check if the backend is running.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
