import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateDesignDetailDetailInput } from './createDesignDetailDetail.input';
import { DesignDetailDetail } from './design_detail_detail.entity';
import { DesignDetailDetailService } from './design_detail_detail.service';

@Resolver()
export class DesignDetailDetailResolver {
  constructor(
    private readonly designDetailDetailService: DesignDetailDetailService,
  ) {}

  @Mutation(() => DesignDetailDetail)
  async createDesignDetailDetail(
    @Args('createDesignDetailDetailInput')
    createDesignDetailDetailInput: CreateDesignDetailDetailInput,
  ) {
    return await this.designDetailDetailService.createDetailDetail({
      createDesignDetailDetailInput,
    });
  }
}
