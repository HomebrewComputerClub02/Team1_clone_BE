import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from '../space.entity';
import { SpaceDetail } from './space_detail.entity';
import { SpaceDetailResolver } from './space_detail.resolver';
import { SpaceDetailService } from './space_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Space, SpaceDetail])],
  providers: [SpaceDetailResolver, SpaceDetailService],
})
export class SpaceDetailModule {}
