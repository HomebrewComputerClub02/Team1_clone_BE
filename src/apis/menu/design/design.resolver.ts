import { Query, Resolver } from '@nestjs/graphql';
import { DesignService } from './design.service';
import { Design } from './entities/design.entity';

@Resolver()
export class DesignResolver {
  constructor(private readonly designService: DesignService) {}

  @Query(() => [Design])
  fetchDesigns() {
    return this.designService.findAll();
  }
}
