import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModelLikesOutput {
  @Field(() => Number)
  likesNum: number;

  @Field(() => Boolean)
  isLiked: boolean;
}
