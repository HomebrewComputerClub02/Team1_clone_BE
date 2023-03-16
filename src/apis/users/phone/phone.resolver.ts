import { Args, Field, Mutation, Resolver } from '@nestjs/graphql';
import { PhoneService } from './phone.service';

@Resolver()
export class PhoneResolver {
  constructor(
    private readonly phoneService: PhoneService, //
  ) {}

  @Mutation(() => String)
  async SendSMS(
    @Args('phone') phone: string, //
  ) {
    const validation = this.phoneService.checkValidation({ phone });
    const token = this.phoneService.getToken();
    if (!validation) return '전화번호를 제대로 입력(10자리 or 11자리)';

    this.phoneService.sendTokenToSMS({ phone, token });
    return '전송완료. 휴대폰을 확인하세요.';
  }

  @Mutation(() => String)
  async CheckSMS(
    @Args('phone') phone: string, //
    @Args('token') token: string,
  ) {
    return await this.phoneService.checkToken({ phone, token });
  }
}
