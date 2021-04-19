import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Group } from "../group/group.model";


@ObjectType()
export class Service {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field({nullable: true})
  description?: string;

  @Field(type => [Group], { nullable: true })
  groups?: [Group];
}