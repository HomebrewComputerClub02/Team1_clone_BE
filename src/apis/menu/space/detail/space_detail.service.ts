import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Space } from '../space.entity';
import { SpaceDetail } from './space_detail.entity';

@Injectable()
export class SpaceDetailService {
  @InjectRepository(SpaceDetail)
  private readonly spaceDetailRepository: Repository<SpaceDetail>;

  @InjectRepository(Space)
  private readonly spaceRepository: Repository<Space>;

  async createDetail({ createSpaceDetailInput }) {
    const result_space = await this.spaceRepository.findOne({
      where: { id: createSpaceDetailInput.space_id },
    });

    const result_spaceDetail = await this.spaceDetailRepository.save({
      name: createSpaceDetailInput.name,
      summary: createSpaceDetailInput.summary,
      img: createSpaceDetailInput.img,
      space: result_space,
    });

    return result_spaceDetail;
  }
}
