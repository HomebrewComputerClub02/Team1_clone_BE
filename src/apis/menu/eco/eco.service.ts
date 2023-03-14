import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Eco } from './entities/eco.entity';

@Injectable()
export class EcoService {
  constructor(
    @InjectRepository(Eco)
    private readonly ecoRepository: Repository<Eco>,
  ) {}

  async findAll() {
    return await this.ecoRepository.find();
  }
}
