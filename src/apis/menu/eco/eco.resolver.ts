import { Query } from '@nestjs/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EcoService } from './eco.service';
import { Eco } from './entities/eco.entity';

@Resolver()
export class EcoResolver {
  constructor(private readonly ecoService: EcoService) {}

  @Query(() => [Eco])
  fetchHighlights() {
    return this.ecoService.findAll();
  }
}
