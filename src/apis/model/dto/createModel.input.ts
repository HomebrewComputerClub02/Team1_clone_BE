import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateHighlightInput } from 'src/apis/menu/highlight/createHighlight.input';
import { CreateHighlightDetailInput } from 'src/apis/menu/highlight/detail/createHighlightDetail.input';
import { CreateModelCategoryInput } from 'src/apis/modelCategory/dto/createModelCategory.input';
import { ModelCategory } from 'src/apis/modelCategory/entities/modelCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';

@InputType()
export class CreateModelInput {
  @Field(() => String)
  name_ko: string;

  @Field(() => String)
  name_en: string;

  @Field(() => String)
  description: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => String)
  main_img: string;

  @Field(() => String)
  modelCategoryName: string;

  @Field(() => CreateHighlightInput)
  highlight: CreateHighlightInput;
}
