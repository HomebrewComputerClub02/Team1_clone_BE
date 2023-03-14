import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateConvenienceInput } from 'src/apis/menu/convenience/createConvenience.input';
import { CreateDesignInput } from 'src/apis/menu/design/createDesign.input';
import { CreateEcoInput } from 'src/apis/menu/eco/createEco.input';
import { CreateHighlightInput } from 'src/apis/menu/highlight/createHighlight.input';
import { CreateHighlightDetailInput } from 'src/apis/menu/highlight/detail/createHighlightDetail.input';
import { CreateHStationInput } from 'src/apis/menu/hStation/createHStation.input';
import { CreateSafetyInput } from 'src/apis/menu/safety/createSafety.input';
import { CreateServiceInput } from 'src/apis/menu/service/createService.input';
import { CreateServiceNetworkInput } from 'src/apis/menu/serviceNetwork/createServiceNetwork.input';
import { CreateSpaceInput } from 'src/apis/menu/space/createSpace.input';
import { CreateVrInput } from 'src/apis/menu/vr/createVr.input';
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

  @Field(() => CreateEcoInput)
  eco: CreateEcoInput;

  @Field(() => CreateDesignInput)
  design: CreateDesignInput;

  @Field(() => CreateVrInput)
  vr: CreateVrInput;

  @Field(() => CreateSpaceInput)
  space: CreateSpaceInput;

  @Field(() => CreateConvenienceInput)
  convenience: CreateConvenienceInput;

  @Field(() => CreateSafetyInput)
  safety: CreateSafetyInput;

  @Field(() => CreateServiceInput)
  service: CreateServiceInput;

  @Field(() => CreateHStationInput)
  hStation: CreateHStationInput;

  @Field(() => CreateServiceNetworkInput)
  serviceNetwork: CreateServiceNetworkInput;
}
