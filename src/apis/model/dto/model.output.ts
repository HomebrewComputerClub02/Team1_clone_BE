import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateConvenienceInput } from 'src/apis/menu/convenience/createConvenience.input';
import { ConvenienceDetail } from 'src/apis/menu/convenience/detail/convenience_detail.entity';
import { CreateDesignInput } from 'src/apis/menu/design/createDesign.input';
import { DesignDetail } from 'src/apis/menu/design/detail/design_detail.entity';
import { CreateEcoInput } from 'src/apis/menu/eco/createEco.input';
import { CreateHighlightInput } from 'src/apis/menu/highlight/createHighlight.input';
import { CreateHighlightDetailInput } from 'src/apis/menu/highlight/detail/createHighlightDetail.input';
import { HighlightDetail } from 'src/apis/menu/highlight/detail/highlight_detail.entity';
import { CreateHStationInput } from 'src/apis/menu/hStation/createHStation.input';
import { CreateSafetyInput } from 'src/apis/menu/safety/createSafety.input';
import { SafetyDetail } from 'src/apis/menu/safety/detail/safety_detail.entity';
import { CreateServiceInput } from 'src/apis/menu/service/createService.input';
import { CreateServiceNetworkInput } from 'src/apis/menu/serviceNetwork/createServiceNetwork.input';
import { CreateSpaceInput } from 'src/apis/menu/space/createSpace.input';
import { SpaceDetail } from 'src/apis/menu/space/detail/space_detail.entity';
import { CreateVrInput } from 'src/apis/menu/vr/createVr.input';
import { VrDetail } from 'src/apis/menu/vr/detail/vr_detail.entity';
import { CreateModelCategoryInput } from 'src/apis/modelCategory/dto/createModelCategory.input';
import { ModelCategory } from 'src/apis/modelCategory/entities/modelCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Model } from '../entities/model.entity';

@ObjectType()
export class ModelOutput extends Model {
  @Field(() => [HighlightDetail])
  highlightDetails: HighlightDetail[];

  @Field(() => [DesignDetail])
  designDetails: DesignDetail[];

  @Field(() => [VrDetail])
  vrDetails: VrDetail[];

  @Field(() => [SpaceDetail])
  spaceDetails: SpaceDetail[];

  @Field(() => [ConvenienceDetail])
  convenienceDetails: ConvenienceDetail[];

  @Field(() => [SafetyDetail])
  safetyDetails: SafetyDetail[];
}
