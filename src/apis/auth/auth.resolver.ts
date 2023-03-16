import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: any,
  ) {
    // 이메일 일치 유저 db에서 찾기
    const user = await this.userService.findOne({ email });

    // 1. 일치하는 유저 없을때,
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    // 비밀번호 체크
    // 2. 일치하는 유저 있지만, 비밀번호 틀렸을 때.
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('비밀번호 다름');

    // 유저 로그인 성공시
    // accessToken 쏴주기
    return this.authService.getAccessToken({ user });
  }
}
