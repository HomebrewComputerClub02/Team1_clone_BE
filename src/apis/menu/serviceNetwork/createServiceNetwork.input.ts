import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateServiceNetworkInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
