import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HStation } from './hStation.entity';
import { HStationResolver } from './hStation.resolver';
import { HStationService } from './hStation.service';

@Module({
  imports: [TypeOrmModule.forFeature([HStation])],
  providers: [HStationResolver, HStationService],
})
export class HStationModule {}
