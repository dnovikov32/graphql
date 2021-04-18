import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { AreaService } from './area.service';
import { AreaResolver } from './area.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Area])],
  providers: [AreaService, AreaResolver],
  exports: [AreaService],
})
export class AreaModule {}
