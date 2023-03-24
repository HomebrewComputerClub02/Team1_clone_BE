import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDesignDetailDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  design_detail_id: string;
}
