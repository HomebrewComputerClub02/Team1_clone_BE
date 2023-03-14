import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Safety } from '../safety.entity';
import { SafetyDetail } from './safety_detail.entity';
import { SafetyDetailResolver } from './safety_detail.resolver';
import { SafetyDetailService } from './safety_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Safety, SafetyDetail])],
  providers: [SafetyDetailResolver, SafetyDetailService],
})
export class SafetyDetailModule {}
