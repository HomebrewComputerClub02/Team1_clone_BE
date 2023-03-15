import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDesignInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
