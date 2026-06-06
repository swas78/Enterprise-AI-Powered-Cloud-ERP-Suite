import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/auth';
import authService from '../services/authService';

export interface AuthContextType {
  token: string;
  user: User | null;
  activeTenant: string;
  setActiveTenant: (name: string) => void;
  mfaStep: boolean;
  setMfaStep: (step: boolean) => void;
  pendingLoginData: any;
  setPendingLoginData: (data: any) => void;
  error: string;
  setError: (err: string) => void;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, tenantName: string) => Promise<void>;
  verifyMfa: (code: string, loginData?: any) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string>(() => localStorage.getItem('token') || '');
  const [user, setUser] = useState<User | null>(() => {
    const cached = localStorage.getItem('user');
    try {
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });

  const [activeTenant, setActiveTenant] = useState<string>(user?.tenantName || 'Amdox Technologies');
  const [mfaStep, setMfaStep] = useState(false);
  const [pendingLoginData, setPendingLoginData] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.tenantName) {
      setActiveTenant(user.tenantName);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setError('');
    setLoading(true);
    try {
      const response = await authService.login({ email, password });
      const { user: u, accessToken: t, refreshToken: rt } = response.data;
      setToken(t);
      setUser(u);
      localStorage.setItem('token', t);
      if (rt) localStorage.setItem('refreshToken', rt);
      localStorage.setItem('user', JSON.stringify(u));
      return response.data;
    } catch (err: any) {
      setError(err.message || 'Login failed.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, tenantName: string) => {
    setError('');
    setLoading(true);
    try {
      const response = await authService.register({ email, password, name, tenantName });
      const { user: u, accessToken: t, refreshToken: rt } = response.data;
      setToken(t);
      setUser(u);
      localStorage.setItem('token', t);
      if (rt) localStorage.setItem('refreshToken', rt);
      localStorage.setItem('user', JSON.stringify(u));
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyMfa = async (code: string, loginData?: any): Promise<boolean> => {
    setError('');
    if (code.trim().length !== 6) {
      setError('MFA Code must be 6 digits.');
      return false;
    }

    const dataToUse = loginData || pendingLoginData;

    if (dataToUse?.mfaRequired && dataToUse?.mfaToken) {
      setLoading(true);
      try {
        const response = await authService.verifyOtp(dataToUse.mfaToken, code);
        const { user: u, accessToken: t, refreshToken: rt } = response.data;
        
        setToken(t);
        setUser(u);
        localStorage.setItem('token', t);
        if (rt) localStorage.setItem('refreshToken', rt);
        localStorage.setItem('user', JSON.stringify(u));
        
        setPendingLoginData(null);
        setMfaStep(false);
        return true;
      } catch (err: any) {
        setError(err.message || 'Invalid MFA code');
        return false;
      } finally {
        setLoading(false);
      }
    }
    return false;
  };

  const logout = async () => {
    try {
      const rt = localStorage.getItem('refreshToken');
      await authService.logout(rt || undefined);
    } catch (e) {
      console.error(e);
    }
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        activeTenant,
        setActiveTenant,
        mfaStep,
        setMfaStep,
        pendingLoginData,
        setPendingLoginData,
        error,
        setError,
        loading,
        login,
        register,
        verifyMfa,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
