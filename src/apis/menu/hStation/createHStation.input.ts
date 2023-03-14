import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHStationInput {
  @Field(() => String)
  summary: string;

  @Field(() => String)
  img: string;
}
