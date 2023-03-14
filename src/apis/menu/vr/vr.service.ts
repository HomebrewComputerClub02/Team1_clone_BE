import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vr } from './vr.entity';

@Injectable()
export class VrService {
  constructor(
    @InjectRepository(Vr)
    private readonly vrRepository: Repository<Vr>,
  ) {}

  async findAll() {
    return await this.vrRepository.find();
  }
}
