import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelCategory } from './entities/modelCategory.entity';
import { ModelCategoryResolver } from './modelCategory.resolver';
import { ModelCategoryService } from './modelCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModelCategory])],
  providers: [ModelCategoryResolver, ModelCategoryService],
})
export class ModelCategoryModule {}
