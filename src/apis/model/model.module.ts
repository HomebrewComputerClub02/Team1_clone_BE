import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighlightDetail } from '../menu/highlight/detail/highlight_detail.entity';
import { Highlight } from '../menu/highlight/entities/highlight.entity';
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
      User,
    ]),
  ],
  providers: [
    ModelResolver, //
    ModelService,
  ],
})
export class ModelModule {}
