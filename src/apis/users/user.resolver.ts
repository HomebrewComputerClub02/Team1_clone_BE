import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, fetchUser } from 'src/commons/auth/gql-user.param';
import { PhoneService } from './phone/phone.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  // @UseGuards(GqlAuthAccessGuard)
  // @Query(() => fetchUser)
  // async fetchUser(
  //   @CurrentUser() currentUser: any, //
  // ) {
  //   console.log('fetchUser 완료');
  //   console.log('현재 유저 정보 :', currentUser);
  //   return currentUser;
  // }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  async fetchUser(
    @CurrentUser() currentUser: any, //
  ) {
    const user = await this.userService.findOne({ email: currentUser.email });
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('simplePw') simplePw: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedSimplePw = await bcrypt.hash(simplePw, 10);
    return this.userService.create({
      email,
      name,
      phone,
      hashedPassword,
      hashedSimplePw,
    });
  }

  @Mutation(() => String)
  async findId(
    @Args('phone') phone: string, //
  ) {
    // phone으로 가입된 아이디가 있나 확인.
    const result = await this.userService.findId({ phone });
    if (!result) return '가입된 아이디 없음.';
    return result;
  }

  @Mutation(() => String)
  async resetPasswordByEmail() {}
}
