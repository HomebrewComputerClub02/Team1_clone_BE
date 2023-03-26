import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSpaceDetailDetailInput } from './createSpaceDetailDetail.input';
import { SpaceDetailDetail } from './space_detail_detail.entity';
import { SpaceDetailDetailService } from './space_detail_detail.service';

@Resolver()
export class SpaceDetailDetailResolver {
  constructor(
    private readonly spaceDetailDetailService: SpaceDetailDetailService,
  ) {}

  @Mutation(() => SpaceDetailDetail)
  async createSpaceDetailDetail(
    @Args('createSpaceDetailDetailInput')
    createSpaceDetailDetailInput: CreateSpaceDetailDetailInput,
  ) {
    return await this.spaceDetailDetailService.createDetailDetail({
      createSpaceDetailDetailInput,
    });
  }
}
