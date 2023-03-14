import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateVrDetailInput } from './createVrDetail.input';
import { VrDetail } from './vr_detail.entity';
import { VrDetailService } from './vr_detail.service';

@Resolver()
export class VrDetailResolver {
  constructor(
    private readonly vrDetailService: VrDetailService, //
  ) {}

  @Mutation(() => VrDetail)
  createVrDetail(
    @Args('createVrDetailInput')
    createVrDetailInput: CreateVrDetailInput, //
  ) {
    return this.vrDetailService.createDetail({
      createVrDetailInput,
    });
  }
}
