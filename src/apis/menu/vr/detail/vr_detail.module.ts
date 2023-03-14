import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vr } from '../vr.entity';
import { VrDetail } from './vr_detail.entity';
import { VrDetailResolver } from './vr_detail.resolver';
import { VrDetailService } from './vr_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([VrDetail, Vr])],
  providers: [VrDetailResolver, VrDetailService],
})
export class VrDetailModule {}
