import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convenience } from '../menu/convenience/convenience.entity';
import { Design } from '../menu/design/entities/design.entity';
import { Eco } from '../menu/eco/entities/eco.entity';
import { HighlightDetail } from '../menu/highlight/detail/highlight_detail.entity';
import { Highlight } from '../menu/highlight/entities/highlight.entity';
import { HStation } from '../menu/hStation/hStation.entity';
import { Safety } from '../menu/safety/safety.entity';
import { Service } from '../menu/service/service.entity';
import { ServiceNetwork } from '../menu/serviceNetwork/serviceNetwork.entity';
import { Space } from '../menu/space/space.entity';
import { Vr } from '../menu/vr/vr.entity';
import { ModelCategory } from '../modelCategory/entities/modelCategory.entity';
import { User } from '../users/entities/user.entity';
import { Model } from './entities/model.entity';
import { ModelResolver } from './model.resolver';
import { ModelService } from './model.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Model, //
      ModelCategory,
      Highlight,
      HighlightDetail,
      Eco,
      Design,
      Vr,
      Space,
      Convenience,
      Safety,
      Service,
      HStation,
      ServiceNetwork,
      User,
    ]),
  ],
  providers: [
    ModelResolver, //
    ModelService,
  ],
})
export class ModelModule {}
