import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Highlight } from '../entities/highlight.entity';
import { HighlightDetail } from './highlight_detail.entity';

@Injectable()
export class HighlightDetailService {
  @InjectRepository(HighlightDetail)
  private readonly highlightDetailRepository: Repository<HighlightDetail>;

  @InjectRepository(Highlight)
  private readonly highlightRepository: Repository<Highlight>;

  async createDetail({ createHighlightDetailInput }) {
    const result_highlight = await this.highlightRepository.findOne({
      where: { id: createHighlightDetailInput.highlight_id },
    });

    const result_highlightDetail = await this.highlightDetailRepository.save({
      name: createHighlightDetailInput.name,
      img: createHighlightDetailInput.img,
      description: createHighlightDetailInput.description,
      highlight: result_highlight,
    });

    return result_highlightDetail;
  }
}
