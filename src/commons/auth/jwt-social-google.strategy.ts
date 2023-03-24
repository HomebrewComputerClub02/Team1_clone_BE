import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
      clientSecret: process.env.GOOGLE_LOGIN_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log('validate 진행');
    console.log('accessToken : ', accessToken);
    console.log('refreshToken : ', refreshToken);
    console.log('profile : ', profile);
    // 여기에 createUser 에 들어가는 요소들이 있어야함.
    return {
      email: profile.emails[0].value,
      password: '0000',
      simplePassword: '0000',
      name: profile.displayName,
      phone: '01000000000',
    };
  }
}
