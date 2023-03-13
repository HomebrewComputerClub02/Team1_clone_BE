import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Highlight } from '../entities/highlight.entity';
import { CreateHighlightDetailInput } from './createHighlightDetail.input';
import { HighlightDetail } from './highlight_detail.entity';
import { HighlightDetailService } from './highlight_detail.service';

@Resolver()
export class HighlightDetailResolver {
  constructor(
    private readonly highlightDetailService: HighlightDetailService, //
  ) {}

  @Mutation(() => HighlightDetail)
  createHighlightDetail(
    @Args('createHighlightDetailInput')
    createHighlightDetailInput: CreateHighlightDetailInput, //
  ) {
    return this.highlightDetailService.createDetail({
      createHighlightDetailInput,
    });
  }
}
