import {Args, Int, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import { Service } from './service.model';
import { ServiceService } from './service.service';
import {Area} from "../area/area.model";
import {GroupService} from "../group/group.service";

@Resolver(of => Service)
export class ServiceResolver {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly groupService: GroupService,
  ) {}

  @Query(returns => [Service])
  async services() {
    return this.serviceService.findAll();
  }

  @Query(returns => Service)
  async service(@Args('id', { type: () => Int }) id: number) {
    return this.serviceService.findOne(id);
  }

  @ResolveField()
  async groups(@Parent() service: Service) {
    return this.groupService.findAll({ service: service.id });
  }

}
