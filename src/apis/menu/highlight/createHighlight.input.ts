import { Field, InputType } from '@nestjs/graphql';
import { CreateHighlightDetailInput } from './detail/createHighlightDetail.input';

@InputType()
export class CreateHighlightInput {
  @Field(() => String)
  summary: string;
}
