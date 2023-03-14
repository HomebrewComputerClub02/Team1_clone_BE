import { Query, Resolver } from '@nestjs/graphql';
import { Convenience } from './convenience.entity';
import { ConvenienceService } from './convenience.service';

@Resolver()
export class ConvenienceResolver {
  constructor(private readonly convenienceService: ConvenienceService) {}

  @Query(() => [Convenience])
  fetchConveniences() {
    return this.convenienceService.findAll();
  }
}
