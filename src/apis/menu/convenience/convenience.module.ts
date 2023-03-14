import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convenience } from './convenience.entity';
import { ConvenienceResolver } from './convenience.resolver';
import { ConvenienceService } from './convenience.service';

@Module({
  imports: [TypeOrmModule.forFeature([Convenience])],
  providers: [ConvenienceResolver, ConvenienceService],
})
export class ConvenienceModule {}
