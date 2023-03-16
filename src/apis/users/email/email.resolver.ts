import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EmailService } from './email.service';

@Resolver()
export class EmailResolver {
  constructor(
    private readonly emailService: EmailService, //
  ) {}

  @Mutation(() => String)
  async sendEmail(
    @Args('email') email: string, //
  ) {
    const validation = this.emailService.checkEmailValidation({ email });
    if (!validation) return '유효하지 않은 이메일';

    return await this.emailService.sendEmail({ email });
  }
}
