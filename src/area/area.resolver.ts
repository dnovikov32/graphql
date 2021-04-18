import {Args, Int, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import { Area } from './area.model';
import { AreaService } from './area.service';
import { DistrictService } from '../district/district.service';


@Resolver(of => Area)
export class AreaResolver {
  constructor(
    private readonly areaService: AreaService,
    private readonly districtService: DistrictService
  ) {}

  @Query(returns => [Area])
  async areas() {
    return this.areaService.findAll();
  }

  @Query(returns => Area)
  async area(@Args('id', { type: () => Int }) id: number) {
    return this.areaService.findOne(id);
  }

  @ResolveField()
  async districts(@Parent() area: Area) {
    return this.districtService.findAll({ area: area.id });
  }

  @Mutation(returns => Area)
  async createArea(@Args({ name: 'name', type: () => String }) name: string) {
    return this.areaService.create({ name: name });
  }
}
