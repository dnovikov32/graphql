import { Field, Int, ObjectType } from '@nestjs/graphql';
import {Area} from "../area/area.model";

@ObjectType()
export class District {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field(type => Area)
  area: Area;
}