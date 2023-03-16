import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneResolver } from './phone.resolver';
import { PhoneService } from './phone.service';
import { Token } from './token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  providers: [PhoneResolver, PhoneService],
})
export class PhoneModule {}
