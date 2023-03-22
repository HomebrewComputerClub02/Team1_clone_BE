import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneResolver } from './phone.resolver';
import { PhoneService } from './phone.service';
import { PhoneToken } from './phoneToken.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneToken])],
  providers: [PhoneResolver, PhoneService],
})
export class PhoneModule {}
