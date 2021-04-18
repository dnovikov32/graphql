import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './district.entity';
import { DistrictService } from './district.service';

@Module({
  imports: [TypeOrmModule.forFeature([District])],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
