import { Args, Field, Mutation, Resolver } from '@nestjs/graphql';
import { getToken } from 'src/commons/utils';
import { PhoneService } from './phone.service';

@Resolver()
export class PhoneResolver {
  constructor(
    private readonly phoneService: PhoneService, //
  ) {}

  @Mutation(() => String)
  async sendSMS(
    @Args('phone') phone: string, //
  ) {
    const validation = this.phoneService.checkPhoneValidation({ phone });
    const token = getToken();
    if (!validation) return '전화번호를 제대로 입력(10자리 or 11자리)';

    this.phoneService.sendTokenToSMS({ phone, token });
    return '전송완료. 휴대폰을 확인하세요.';
  }

  @Mutation(() => String)
  async checkSMS(
    @Args('phone') phone: string, //
    @Args('token') token: string,
  ) {
    return await this.phoneService.checkToken({ phone, token });
  }
}
