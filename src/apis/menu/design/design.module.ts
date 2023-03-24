import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignResolver } from './design.resolver';
import { DesignService } from './design.service';
import { Design } from './design.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Design])],
  providers: [DesignResolver, DesignService],
})
export class DesignModule {}
