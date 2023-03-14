import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Safety } from '../safety.entity';
import { SafetyDetail } from './safety_detail.entity';

@Injectable()
export class SafetyDetailService {
  @InjectRepository(SafetyDetail)
  private readonly safetyDetailRepository: Repository<SafetyDetail>;

  @InjectRepository(Safety)
  private readonly safetyRepository: Repository<Safety>;

  async createDetail({ createSafetyDetailInput }) {
    const result_safety = await this.safetyRepository.findOne({
      where: { id: createSafetyDetailInput.safety_id },
    });

    const result_safetyDetail = await this.safetyDetailRepository.save({
      name: createSafetyDetailInput.name,
      summary: createSafetyDetailInput.summary,
      img: createSafetyDetailInput.img,
      safety: result_safety,
    });

    return result_safetyDetail;
  }
}
