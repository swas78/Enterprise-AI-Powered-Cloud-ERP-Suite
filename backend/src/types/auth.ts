export type UserRole = 'SuperAdmin' | 'TenantAdmin' | 'Manager' | 'Viewer' | 'ComplianceOfficer';

export interface UserPayload {
  userId: string;
  email: string;
  role: UserRole;
  tenantId: string;
}

export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  tenantName: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    tenantId: string;
    tenantName: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
  tenantId: string;
  iat?: number;
  exp?: number;
}

export interface RefreshPayload {
  userId: string;
  iat?: number;
  exp?: number;
}

export interface PasswordResetDTO {
  token: string;
  newPassword: string;
}

export interface ChangePasswordDTO {
  currentPassword: string;
  newPassword: string;
}
