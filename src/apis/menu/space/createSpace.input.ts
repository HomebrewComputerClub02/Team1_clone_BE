import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpaceInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
