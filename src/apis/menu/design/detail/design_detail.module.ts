import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Design } from '../entities/design.entity';
import { DesignDetail } from './design_detail.entity';
import { DesignDetailResolver } from './design_detail.resolver';
import { DesignDetailService } from './design_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([DesignDetail, Design])], //
  providers: [DesignDetailResolver, DesignDetailService],
})
export class DesignDetailModule {}
