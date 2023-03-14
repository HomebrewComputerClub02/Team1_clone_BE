import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EcoResolver } from './eco.resolver';
import { EcoService } from './eco.service';
import { Eco } from './entities/eco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Eco])],
  providers: [EcoResolver, EcoService],
})
export class EcoModule {}
