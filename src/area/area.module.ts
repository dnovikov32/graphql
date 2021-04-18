import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { AreaService } from './area.service';
import { AreaResolver } from './area.resolver';
import { DistrictModule } from '../district/district.module';
import { DistrictLoader } from "../district/district.loader";


@Module({
  imports: [TypeOrmModule.forFeature([Area]), DistrictModule],
  providers: [
    AreaService,
    AreaResolver,
    DistrictLoader
  ],
  exports: [AreaService],
})
export class AreaModule {}
