import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { District } from "./district.entity";

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}

  findOne(id: number): Promise<District> {
    return this.districtRepository.findOne(id);
  }

  findAll(options: object): Promise<District[]> {
    return this.districtRepository.find(options);
  }

}
