import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Highlight } from '../entities/highlight.entity';
import { HighlightDetail } from './highlight_detail.entity';
import { HighlightDetailResolver } from './highlight_detail.resolver';
import { HighlightDetailService } from './highlight_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([HighlightDetail, Highlight])], //
  providers: [HighlightDetailResolver, HighlightDetailService],
})
export class HighlightDetailModule {}
