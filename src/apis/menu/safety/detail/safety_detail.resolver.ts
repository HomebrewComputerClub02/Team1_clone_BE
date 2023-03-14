import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSafetyDetailInput } from './createSafetyDetail.input';
import { SafetyDetail } from './safety_detail.entity';
import { SafetyDetailService } from './safety_detail.service';

@Resolver()
export class SafetyDetailResolver {
  constructor(
    private readonly safetyDetailService: SafetyDetailService, //
  ) {}

  @Mutation(() => SafetyDetail)
  createSafetyDetail(
    @Args('createSafetyDetailInput')
    createSafetyDetailInput: CreateSafetyDetailInput, //
  ) {
    return this.safetyDetailService.createDetail({
      createSafetyDetailInput,
    });
  }
}
