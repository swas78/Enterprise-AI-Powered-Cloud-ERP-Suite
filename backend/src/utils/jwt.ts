import jwt from 'jsonwebtoken';

export class JwtHelper {
  public static sign(payload: any, secret: string, options?: jwt.SignOptions): string {
    return jwt.sign(payload, secret, options);
  }

  public static verify(token: string, secret: string): any {
    try {
      return jwt.verify(token, secret);
    } catch {
      return null;
    }
  }
}

export default JwtHelper;
