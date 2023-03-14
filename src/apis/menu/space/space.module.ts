import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from './space.entity';
import { SpaceResolver } from './space.resolver';
import { SpaceService } from './space.service';

@Module({
  imports: [TypeOrmModule.forFeature([Space])],
  providers: [SpaceResolver, SpaceService],
})
export class SpaceModule {}
