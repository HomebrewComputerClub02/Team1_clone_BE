import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'refreshGuard',
) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (!req.headers.cookie) return 'cookie 없음';
        const cookie = req.headers.cookie;
        if (!cookie.includes('refreshToken=')) return 'refreshToken 없음';
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },
      secretOrKey: 'myRefreshKey',
    });
  }

  validate(payload) {
    // console.log('validate payload : ', payload); // { email: c@c.com, sub: qkwefuasdij-012093sd }
    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
