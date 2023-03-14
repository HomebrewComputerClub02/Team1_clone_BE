import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVrDetailInput {
  @Field(() => String)
  color_name: string;

  @Field(() => String)
  color_code: string;

  @Field(() => String)
  vr_id: string;
}
