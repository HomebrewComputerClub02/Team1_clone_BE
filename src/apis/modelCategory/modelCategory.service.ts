import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModelCategory } from './entities/modelCategory.entity';

@Injectable()
export class ModelCategoryService {
  constructor(
    @InjectRepository(ModelCategory)
    private readonly modelCategoryRepository: Repository<ModelCategory>,
  ) {}

  async create({ name }) {
    // 같은 카테고리 있으면 등록시키면 안됨.
    const categoryName = await this.modelCategoryRepository.findOne({
      where: { name },
    });
    if (categoryName) throw new ConflictException('이미 있는 카테고리다.');

    const result = await this.modelCategoryRepository.save({
      name,
    });
    console.log(result);
    return result;
  }
}
