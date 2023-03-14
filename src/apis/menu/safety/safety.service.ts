import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Safety } from './safety.entity';

@Injectable()
export class SafetyService {
  constructor(
    @InjectRepository(Safety)
    private readonly safetyRepository: Repository<Safety>,
  ) {}

  async findAll() {
    return await this.safetyRepository.find();
  }
}
