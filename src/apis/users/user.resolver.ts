import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async fetchUser() {
    return 'hi';
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
}
