import { Query, Resolver } from '@nestjs/graphql';
import { Space } from './space.entity';
import { SpaceService } from './space.service';

@Resolver()
export class SpaceResolver {
  constructor(private readonly spaceService: SpaceService) {}

  @Query(() => [Space])
  fetchSpaces() {
    return this.spaceService.findAll();
  }
}
