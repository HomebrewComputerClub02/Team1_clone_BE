import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
