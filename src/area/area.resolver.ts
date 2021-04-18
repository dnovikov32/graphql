import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Area } from "./area.model";
import { AreaService } from "./area.service";


@Resolver(of => Area)
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(returns => [Area])
  async areas() {
    return this.areaService.findAll();
  }

  @Query(returns => Area)
  async area(@Args('id', { type: () => Int }) id: number) {
    return this.areaService.findOne(id);
  }

  @Mutation(returns => Area)
  async createArea(@Args({ name: 'name', type: () => String }) name: string) {
    return this.areaService.create({ name: name });
  }
}
