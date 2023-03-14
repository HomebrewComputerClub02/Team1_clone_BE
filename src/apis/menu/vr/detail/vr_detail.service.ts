import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vr } from '../vr.entity';
import { VrDetail } from './vr_detail.entity';

@Injectable()
export class VrDetailService {
  @InjectRepository(VrDetail)
  private readonly vrDetailRepository: Repository<VrDetail>;

  @InjectRepository(Vr)
  private readonly vrRepository: Repository<Vr>;

  async createDetail({ createVrDetailInput }) {
    const result_vr = await this.vrRepository.findOne({
      where: { id: createVrDetailInput.vr_id },
    });

    const result_vrDetail = await this.vrDetailRepository.save({
      color_name: createVrDetailInput.color_name,
      color_code: createVrDetailInput.color_code,
      vr: result_vr,
    });

    return result_vrDetail;
  }
}
