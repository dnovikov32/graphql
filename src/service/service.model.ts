import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Service {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field({nullable: true})
  description?: string;
}