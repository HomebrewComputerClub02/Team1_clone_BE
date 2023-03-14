import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HStation } from './hStation.entity';

@Injectable()
export class HStationService {
  constructor(
    @InjectRepository(HStation)
    private readonly hStationRepository: Repository<HStation>,
  ) {}

  async findAll() {
    return await this.hStationRepository.find();
  }
}
