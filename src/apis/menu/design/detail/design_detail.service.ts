import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Design } from '../design.entity';
import { DesignDetail } from './design_detail.entity';

@Injectable()
export class DesignDetailService {
  @InjectRepository(DesignDetail)
  private readonly designDetailRepository: Repository<DesignDetail>;

  @InjectRepository(Design)
  private readonly designRepository: Repository<Design>;

  async createDetail({ createDesignDetailInput }) {
    const result_design = await this.designRepository.findOne({
      where: { id: createDesignDetailInput.design_id },
    });

    const result_designDetail = await this.designDetailRepository.save({
      name: createDesignDetailInput.name,
      img: createDesignDetailInput.img,
      design: result_design,
    });

    console.log('result_designDetail :', result_designDetail);
    console.log('result_design :', result_design);

    return result_designDetail;
  }
}
