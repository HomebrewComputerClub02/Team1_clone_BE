import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { ConvenienceDetail } from 'src/apis/menu/convenience/detail/convenience_detail.entity';
import { DesignDetail } from 'src/apis/menu/design/detail/design_detail.entity';
import { DesignDetailDetail } from 'src/apis/menu/design/detail/detail_detail/design_detail_detail.entity';
import { HighlightDetail } from 'src/apis/menu/highlight/detail/highlight_detail.entity';
import { SafetyDetail } from 'src/apis/menu/safety/detail/safety_detail.entity';
import { SpaceDetailDetail } from 'src/apis/menu/space/detail/detail_detail/space_detail_detail.entity';
import { SpaceDetail } from 'src/apis/menu/space/detail/space_detail.entity';
import { VrDetail } from 'src/apis/menu/vr/detail/vr_detail.entity';
import { User } from 'src/apis/users/user.entity';
import { Model } from '../model.entity';

@ObjectType()
export class ModelOutput extends Model {
  @Field(() => [User])
  users: User[];

  @Field(() => [HighlightDetail])
  highlightDetails: HighlightDetail[];

  @Field(() => [DesignDetail])
  designDetails: DesignDetail[];

  @Field(() => [[DesignDetailDetail]])
  designDetailDetails: DesignDetailDetail[][];

  @Field(() => [VrDetail])
  vrDetails: VrDetail[];

  @Field(() => [SpaceDetail])
  spaceDetails: SpaceDetail[];

  @Field(() => [[SpaceDetailDetail]])
  spaceDetailDetails: SpaceDetailDetail[][];

  @Field(() => [ConvenienceDetail])
  convenienceDetails: ConvenienceDetail[];

  @Field(() => [SafetyDetail])
  safetyDetails: SafetyDetail[];
}
