import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Design } from './design.entity';

@Injectable()
export class DesignService {
  constructor(
    @InjectRepository(Design)
    private readonly designRepository: Repository<Design>,
  ) {}

  async findAll() {
    return await this.designRepository.find();
  }
}
