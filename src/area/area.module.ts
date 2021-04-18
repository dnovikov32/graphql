import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { AreaService } from './area.service';
import { AreaResolver } from './area.resolver';
import { DistrictModule } from '../district/district.module';

@Module({
  imports: [TypeOrmModule.forFeature([Area]), DistrictModule],
  providers: [AreaService, AreaResolver],
  exports: [AreaService],
})
export class AreaModule {}
