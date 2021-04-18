import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AreaModule } from './area/area.module';
import { DistrictModule } from './district/district.module';
import { AddressModule } from './address/address.module';
import { GroupModule } from './group/group.module';
import { ServiceModule } from './service/service.module';

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
})
export class AppModule {}
