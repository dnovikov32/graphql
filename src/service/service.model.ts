import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Post } from './post';

@ObjectType()
export class Service {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  // @Field({ nullable: true })
  // lastName?: string;
  //
  // @Field(type => [Post])
  // posts: Post[];
}