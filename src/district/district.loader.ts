import {Injectable, Scope} from '@nestjs/common'
import { OrderedNestDataLoader } from 'nestjs-graphql-dataloader'
import {DistrictService} from "./district.service";
import {District} from "./district.entity";

@Injectable({ scope: Scope.REQUEST })
export class DistrictLoader extends OrderedNestDataLoader<District['id'], District> {
  constructor(private readonly districtService: DistrictService) {
    super()
  }

  protected getOptions = () => ({
    query: (keys: Array<District['id']>) => this.districtService.findByAreaIds(keys),
  })
}