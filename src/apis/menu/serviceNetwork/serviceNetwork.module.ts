import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceNetwork } from './serviceNetwork.entity';
import { ServiceNetworkResolver } from './serviceNetwork.resolver';
import { ServiceNetworkService } from './serviceNetwork.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceNetwork])],
  providers: [ServiceNetworkResolver, ServiceNetworkService],
})
export class ServiceNetworkModule {}
