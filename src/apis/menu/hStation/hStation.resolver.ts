import { Query, Resolver } from '@nestjs/graphql';
import { HStation } from './hStation.entity';
import { HStationService } from './hStation.service';

@Resolver()
export class HStationResolver {
  constructor(private readonly hStationService: HStationService) {}

  @Query(() => [HStation])
  fetchHStations() {
    return this.hStationService.findAll();
  }
}
