import { Field, Int, ObjectType } from '@nestjs/graphql';
import { District } from "../district/district.model";

@ObjectType()
export class Area {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field(type => [District], { nullable: true })
  districts?: [District];
}