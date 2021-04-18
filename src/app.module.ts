import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AreaModule } from './area/area.module';
import { DistrictModule } from './district/district.module';
import { AddressModule } from './address/address.module';
import { GroupModule } from './group/group.module';
import { ServiceModule } from './service/service.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-dataloader'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
    }),
    AreaModule,
    DistrictModule,
    AddressModule,
    GroupModule,
    ServiceModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    }
  ]
})
export class AppModule {}
