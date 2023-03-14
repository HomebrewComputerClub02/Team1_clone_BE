import { Query, Resolver } from '@nestjs/graphql';
import { Safety } from './safety.entity';
import { SafetyService } from './safety.service';

@Resolver()
export class SafetyResolver {
  constructor(private readonly safetyService: SafetyService) {}

  @Query(() => [Safety])
  fetchSafetys() {
    return this.safetyService.findAll();
  }
}
