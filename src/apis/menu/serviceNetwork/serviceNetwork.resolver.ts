import { Query, Resolver } from '@nestjs/graphql';
import { ServiceNetwork } from './serviceNetwork.entity';
import { ServiceNetworkService } from './serviceNetwork.service';

@Resolver()
export class ServiceNetworkResolver {
  constructor(private readonly serviceNetworkService: ServiceNetworkService) {}

  @Query(() => [ServiceNetwork])
  fetchServiceNetworks() {
    return this.serviceNetworkService.findAll();
  }
}
