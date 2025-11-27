import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(email: string, password: string) {
    // TODO: Implement actual user validation with database
    // This is a placeholder implementation
    if (!email || !password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: 'user-id', email };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '30d' });

    return {
      accessToken,
      refreshToken,
      user: {
        id: 'user-id',
        email,
        name: 'Demo User',
      },
    };
  }

  async register(email: string, password: string, name: string) {
    // TODO: Implement actual user creation with database
    // This is a placeholder implementation
    const payload = { sub: 'new-user-id', email };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        id: 'new-user-id',
        email,
        name,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign({
        sub: payload.sub,
        email: payload.email,
      });

      return { accessToken: newAccessToken };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch {
      return null;
    }
  }
}
