import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighlightDetail } from './detail/highlight_detail.entity';
import { Highlight } from './entities/highlight.entity';
import { HighlightResolver } from './highlight.resolver';
import { HighlightService } from './highlight.service';

@Module({
  imports: [TypeOrmModule.forFeature([Highlight, HighlightDetail])],
  providers: [HighlightResolver, HighlightService],
})
export class HighlightModule {}
