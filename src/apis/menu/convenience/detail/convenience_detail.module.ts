import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convenience } from '../convenience.entity';
import { ConvenienceDetail } from './convenience_detail.entity';
import { ConvenienceDetailResolver } from './convenience_detail.resolver';
import { ConvenienceDetailService } from './convenience_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Convenience, ConvenienceDetail])],
  providers: [ConvenienceDetailResolver, ConvenienceDetailService],
})
export class ConvenienceDetailModule {}
