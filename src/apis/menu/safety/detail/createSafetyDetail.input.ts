import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSafetyDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  safety_id: string;
}
