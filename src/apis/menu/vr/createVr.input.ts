import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVrInput {
  @Field(() => String)
  img: string;
}
