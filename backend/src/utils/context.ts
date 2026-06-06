import { AsyncLocalStorage } from 'async_hooks';

export interface ISaasContext {
  tenantId?: string;
  userId?: string;
  role?: string;
}

// Global AsyncLocalStorage context channel
export const saasContextStore = new AsyncLocalStorage<ISaasContext>();

export const getTenantContext = (): string | undefined => {
  return saasContextStore.getStore()?.tenantId;
};

export const getUserContext = (): string | undefined => {
  return saasContextStore.getStore()?.userId;
};

export const getRoleContext = (): string | undefined => {
  return saasContextStore.getStore()?.role;
};
