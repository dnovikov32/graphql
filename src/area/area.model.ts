import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Area {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false })
  name: string;
}