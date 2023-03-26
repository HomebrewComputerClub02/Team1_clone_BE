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

  async createDetailDetail({ createSpaceDetailDetailInput }) {
    const result_space_detail = await this.SpaceDetailRepository.findOne({
      where: { id: createSpaceDetailDetailInput.space_detail_id },
    });

    const result_space_detail_detail =
      await this.SpaceDetailDetailRepository.save({
        name: createSpaceDetailDetailInput.name,
        summary: createSpaceDetailDetailInput.summary,
        img: createSpaceDetailDetailInput.img,
        space_detail: result_space_detail,
      });

    return result_space_detail_detail;
  }
}
