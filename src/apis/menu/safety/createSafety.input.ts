import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSafetyInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
