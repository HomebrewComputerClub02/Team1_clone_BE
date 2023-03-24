import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateConvenienceInput {
  @Field(() => String)
  summary: string;
}
