import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from '../../space.entity';
import { SpaceDetail } from '../space_detail.entity';
import { SpaceDetailDetail } from './space_detail_detail.entity';
import { SpaceDetailDetailResolver } from './space_detail_detail.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Space, SpaceDetail, SpaceDetailDetail])],
  providers: [SpaceDetailDetailResolver],
})
export class SpaceDetailDetailModule {}
