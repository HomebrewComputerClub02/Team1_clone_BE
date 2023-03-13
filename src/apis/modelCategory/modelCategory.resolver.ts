import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ModelCategory } from './entities/modelCategory.entity';
import { ModelCategoryService } from './modelCategory.service';

@Resolver()
export class ModelCategoryResolver {
  constructor(
    private readonly modelCategoryService: ModelCategoryService, //
  ) {}
}
