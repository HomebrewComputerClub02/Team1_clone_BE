import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpaceDetail } from '../space_detail.entity';
import { SpaceDetailDetail } from './space_detail_detail.entity';

@Injectable()
export class SpaceDetailDetailService {
  @InjectRepository(SpaceDetail)
  private readonly SpaceDetailRepository: Repository<SpaceDetail>;

  @InjectRepository(SpaceDetailDetail)
  private readonly SpaceDetailDetailRepository: Repository<SpaceDetailDetail>;

  async createDetailDetail({}) {}
}
