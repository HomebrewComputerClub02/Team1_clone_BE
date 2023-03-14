import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ConvenienceDetail } from './convenience_detail.entity';
import { ConvenienceDetailService } from './convenience_detail.service';
import { CreateConvenienceDetailInput } from './createConvenienceDetail.input';

@Resolver()
export class ConvenienceDetailResolver {
  constructor(
    private readonly convenienceDetailService: ConvenienceDetailService, //
  ) {}

  @Mutation(() => ConvenienceDetail)
  createConvenienceDetail(
    @Args('createConvenienceDetailInput')
    createConvenienceDetailInput: CreateConvenienceDetailInput, //
  ) {
    return this.convenienceDetailService.createDetail({
      createConvenienceDetailInput,
    });
  }
}
