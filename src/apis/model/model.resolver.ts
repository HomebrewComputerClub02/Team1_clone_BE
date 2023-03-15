import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateModelInput } from './dto/createModel.input';
import { ModelOutput } from './dto/model.output';
import { Model } from './entities/model.entity';
import { ModelService } from './model.service';

@Resolver()
export class ModelResolver {
  constructor(private readonly modelService: ModelService) {}

  @Query(() => [Model])
  fetchModels() {
    return this.modelService.findAll();
  }

  @Query(() => ModelOutput)
  fetchModel(
    @Args('modelId') modelId: string, //
  ) {
    return this.modelService.findOne({ modelId });
  }

  @Mutation(() => Model)
  createModel(
    @Args('createModelInput') createModelInput: CreateModelInput, //
  ) {
    // DB 카테고리 등록
    return this.modelService.create({ createModelInput });
  }
}
