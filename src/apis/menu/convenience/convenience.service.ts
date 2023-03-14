import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Convenience } from './convenience.entity';

@Injectable()
export class ConvenienceService {
  constructor(
    @InjectRepository(Convenience)
    private readonly convenienceRepository: Repository<Convenience>,
  ) {}

  async findAll() {
    return await this.convenienceRepository.find();
  }
}
