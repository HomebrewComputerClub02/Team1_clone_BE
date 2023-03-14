import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HighlightDetail } from './detail/highlight_detail.entity';
import { Highlight } from './entities/highlight.entity';

@Injectable()
export class HighlightService {
  constructor(
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
  ) {}

  async findAll() {
    return await this.highlightRepository.find();
  }
}
