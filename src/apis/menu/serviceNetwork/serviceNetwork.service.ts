import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceNetwork } from './serviceNetwork.entity';

@Injectable()
export class ServiceNetworkService {
  constructor(
    @InjectRepository(ServiceNetwork)
    private readonly serviceNetworkRepository: Repository<ServiceNetwork>,
  ) {}

  async findAll() {
    return await this.serviceNetworkRepository.find();
  }
}
