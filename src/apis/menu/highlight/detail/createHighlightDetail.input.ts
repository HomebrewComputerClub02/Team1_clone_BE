import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHighlightDetailInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  highlight_id: string;
}
