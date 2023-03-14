import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vr } from './vr.entity';
import { VrResolver } from './vr.resolver';
import { VrService } from './vr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vr])],
  providers: [VrResolver, VrService],
})
export class VrModule {}
