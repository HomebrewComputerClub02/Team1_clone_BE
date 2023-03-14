import { Query, Resolver } from '@nestjs/graphql';
import { Service } from './Service.entity';
import { ServiceService } from './service.service';

@Resolver()
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Query(() => [Service])
  fetchServices() {
    return this.serviceService.findAll();
  }
}
