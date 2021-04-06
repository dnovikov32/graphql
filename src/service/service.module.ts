import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entity/service.entity';
import { ServiceResolver } from './service.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServiceService, ServiceResolver],
  controllers: [ServiceController],
  exports: [ServiceService],
})
export class ServiceModule {}
