import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ServiceModule,
  ],
})
export class AppModule {}
