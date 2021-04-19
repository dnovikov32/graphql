import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Service } from "../service/service.model";

@ObjectType()
export class Group {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field(type => Int)
  maxMembers: number;

  @Field(type => Int)
  currentMembers: number;

  @Field(type => Service)
  service: Service;
}