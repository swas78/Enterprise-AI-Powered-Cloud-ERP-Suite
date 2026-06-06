import { eventEmitter } from './eventEmitter';

export class AuthEvents {
  public static emitRegister(payload: { tenantId: string; userId: string; email: string; tenantName: string }) {
    eventEmitter.emit('auth.register', payload);
  }

  public static emitLogin(payload: { tenantId: string; userId: string; email: string }) {
    eventEmitter.emit('auth.login', payload);
  }
}

export default AuthEvents;
