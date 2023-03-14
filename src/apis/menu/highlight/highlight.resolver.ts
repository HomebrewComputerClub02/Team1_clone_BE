import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateHighlightDetailInput } from './detail/createHighlightDetail.input';
import { Highlight } from './entities/highlight.entity';
import { HighlightService } from './highlight.service';

@Resolver()
export class HighlightResolver {
  constructor(private readonly highlightService: HighlightService) {}

  @Query(() => [Highlight])
  fetchHighlights() {
    return this.highlightService.findAll();
  }
}
