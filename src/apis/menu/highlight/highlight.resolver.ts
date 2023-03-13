import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateHighlightDetailInput } from './detail/createHighlightDetail.input';
import { Highlight } from './entities/highlight.entity';
import { HighlightService } from './highlight.service';

@Resolver()
export class HighlightResolver {}
