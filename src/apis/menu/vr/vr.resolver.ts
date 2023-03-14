import { Query, Resolver } from '@nestjs/graphql';
import { Vr } from './vr.entity';
import { VrService } from './vr.service';

@Resolver()
export class VrResolver {
  constructor(private readonly vrService: VrService) {}

  @Query(() => [Vr])
  fetchVrs() {
    return this.vrService.findAll();
  }
}
