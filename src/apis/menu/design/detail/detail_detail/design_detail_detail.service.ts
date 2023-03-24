import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DesignDetail } from '../design_detail.entity';
import { DesignDetailDetail } from './design_detail_detail.entity';

@Injectable()
export class DesignDetailDetailService {
  @InjectRepository(DesignDetail)
  private readonly designDetailRepository: Repository<DesignDetail>;

  @InjectRepository(DesignDetailDetail)
  private readonly designDetailDetailRepository: Repository<DesignDetailDetail>;

  async createDetailDetail({ createDesignDetailDetailInput }) {
    const result_design_detail = await this.designDetailRepository.findOne({
      where: { id: createDesignDetailDetailInput.design_detail_id },
    });

    const result_design_detail_detail =
      await this.designDetailDetailRepository.save({
        name: createDesignDetailDetailInput.name,
        summary: createDesignDetailDetailInput.summary,
        img: createDesignDetailDetailInput.img,
        design_detail: result_design_detail,
      });

    return result_design_detail_detail;
  }
}
