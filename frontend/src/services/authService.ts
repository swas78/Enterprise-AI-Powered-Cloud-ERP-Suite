import { apiFetch } from './api';

export const authService = {
  login: async (credentials: any) => {
    const res = await apiFetch('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message || 'Login failed');
    }
    return res.json();
  },

  register: async (data: any) => {
    const res = await apiFetch('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message || 'Registration failed');
    }
    return res.json();
  },

  verifyOtp: async (mfaToken: string, code: string) => {
    const res = await apiFetch('/api/v1/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ mfaToken, code }),
    });
    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message || 'OTP Verification failed');
    }
    return res.json();
  },

  logout: async (refreshToken?: string) => {
    try {
      const res = await apiFetch('/api/v1/auth/logout', {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });
      return res.ok;
    } catch (e) {
      console.error('Logout error', e);
      return false;
    }
  },
};

export default authService;
