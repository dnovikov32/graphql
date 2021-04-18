import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Service } from './service.model';
import { ServiceService } from './service.service';

@Resolver(of => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Query(returns => [Service])
  async services() {
    return this.serviceService.findAll();
  }

  @Query(returns => Service)
  async service(@Args('id', { type: () => Int }) id: number) {
    return this.serviceService.findOne(id);
  }
}
