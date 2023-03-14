import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateDesignDetailInput } from './createDesignDetail.input';
import { DesignDetail } from './design_detail.entity';
import { DesignDetailService } from './design_detail.service';

@Resolver()
export class DesignDetailResolver {
  constructor(
    private readonly designDetailService: DesignDetailService, //
  ) {}

  @Mutation(() => DesignDetail)
  createDesignDetail(
    @Args('createDesignDetailInput')
    createDesignDetailInput: CreateDesignDetailInput, //
  ) {
    return this.designDetailService.createDetail({
      createDesignDetailInput,
    });
  }
}
