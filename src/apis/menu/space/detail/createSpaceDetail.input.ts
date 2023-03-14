import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpaceDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  space_id: string;
}
