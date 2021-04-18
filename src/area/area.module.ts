import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Area])],
})
export class AreaModule {}
