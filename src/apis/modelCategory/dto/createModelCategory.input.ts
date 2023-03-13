import { Field, InputType, Int, OmitType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ModelCategory } from 'src/apis/modelCategory/entities/modelCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';

@InputType()
export class CreateModelCategoryInput {
  @Field(() => String)
  name: string;
}

// @InputType()
// export class CreateModelCategoryInput extends OmitType(
//   ModelCategory,
//   ['id'],
//   InputType,
// ) {}
