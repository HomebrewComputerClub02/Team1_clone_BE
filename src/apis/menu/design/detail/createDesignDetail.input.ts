import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDesignDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  design_id: string;
}
