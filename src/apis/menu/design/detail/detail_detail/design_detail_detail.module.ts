import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Design } from '../../design.entity';
import { DesignDetail } from '../design_detail.entity';
import { DesignDetailDetail } from './design_detail_detail.entity';
import { DesignDetailDetailResolver } from './design_detail_detail.resolver';
import { DesignDetailDetailService } from './design_detail_detail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Design, DesignDetail, DesignDetailDetail]),
  ],
  providers: [DesignDetailDetailResolver, DesignDetailDetailService],
})
export class DesignDetailDetailModule {}
