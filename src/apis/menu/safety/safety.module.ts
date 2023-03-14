import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Safety } from './safety.entity';
import { SafetyResolver } from './safety.resolver';
import { SafetyService } from './safety.service';

@Module({
  imports: [TypeOrmModule.forFeature([Safety])],
  providers: [SafetyResolver, SafetyService],
})
export class SafetyModule {}
