import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEcoInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
