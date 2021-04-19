import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServiceResolver } from './service.resolver';
import {GroupModule} from "../group/group.module";

@Module({
  imports: [TypeOrmModule.forFeature([Service]), GroupModule],
  providers: [ServiceService, ServiceResolver],
  controllers: [ServiceController],
  exports: [ServiceService],
})
export class ServiceModule {}
