import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSpaceDetailInput } from './createSpaceDetail.input';
import { SpaceDetail } from './space_detail.entity';
import { SpaceDetailService } from './space_detail.service';

@Resolver()
export class SpaceDetailResolver {
  constructor(
    private readonly spaceDetailService: SpaceDetailService, //
  ) {}

  @Mutation(() => SpaceDetail)
  createSpaceDetail(
    @Args('createSpaceDetailInput')
    createSpaceDetailInput: CreateSpaceDetailInput, //
  ) {
    return this.spaceDetailService.createDetail({
      createSpaceDetailInput,
    });
  }
}
