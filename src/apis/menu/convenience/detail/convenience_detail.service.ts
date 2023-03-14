import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Convenience } from '../convenience.entity';
import { ConvenienceDetail } from './convenience_detail.entity';

@Injectable()
export class ConvenienceDetailService {
  @InjectRepository(ConvenienceDetail)
  private readonly convenienceDetailRepository: Repository<ConvenienceDetail>;

  @InjectRepository(Convenience)
  private readonly convenienceRepository: Repository<Convenience>;

  async createDetail({ createConvenienceDetailInput }) {
    const result_convenience = await this.convenienceRepository.findOne({
      where: { id: createConvenienceDetailInput.convenience_id },
    });

    const result_convenienceDetail =
      await this.convenienceDetailRepository.save({
        name: createConvenienceDetailInput.name,
        summary: createConvenienceDetailInput.summary,
        img: createConvenienceDetailInput.img,
        convenience: result_convenience,
      });

    return result_convenienceDetail;
  }
}
