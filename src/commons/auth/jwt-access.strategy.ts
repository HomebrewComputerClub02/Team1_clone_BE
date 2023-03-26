import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'accessGuard',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //
      secretOrKey: 'myAccessKey',
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
