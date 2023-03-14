import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateConvenienceDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  convenience_id: string;
}
