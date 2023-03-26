import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';
import { CreateModelInput } from './dto/createModel.input';
import { ModelOutput } from './dto/model.output';
import { ModelLikesOutput } from './dto/modelLikes.output';
import { Model } from './model.entity';
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

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async likeAdd(
    @CurrentUser() currentUser: any,
    @Args('modelId') modelId: string, //
  ) {
    const userEmail = currentUser.email;
    return await this.modelService.like({ userEmail, modelId });
  }

  @Query(() => ModelLikesOutput)
  async getLikesNum(
    @Args('modelId') modelId: string, //
    @Args('userEmail', { nullable: true }) userEmail: string,
  ) {
    return await this.modelService.getLikesNum({ modelId, userEmail });
  }
}
