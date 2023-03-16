import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailResolver } from './email.resolver';
import { EmailService } from './email.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [EmailResolver, EmailService],
})
export class EmailModule {}
