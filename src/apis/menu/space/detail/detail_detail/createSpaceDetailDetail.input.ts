import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpaceDetailDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  space_detail_id: string;
}
