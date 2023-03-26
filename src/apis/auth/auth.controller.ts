import { Controller, Get } from '@nestjs/common';
import { Req, Res, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'name' | 'password' | 'simplePw' | 'phone'>;
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    console.log('authguard 내부 실행');
    // 1. 가입확인
    let user = await this.userService.findOne({ email: req.user.email });
    // 2. 회원가입
    if (!user) {
      user = await this.userService.create({
        email: req.user.email,
        hashedPassword: '0000',
        hashedSimplePw: '0000',
        name: req.user.name,
        phone: '01000000000',
      });
    }
    // 3. 로그인
    this.authService.setRefreshToken({ user, res });
    res.redirect('http://localhost:3000');
    console.log('구글로그인 완료');
  }
}
