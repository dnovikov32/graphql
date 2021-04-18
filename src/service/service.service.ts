import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entity/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create.service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  create(CreateServiceDto: CreateServiceDto): Promise<Service> {
    const service = new Service();

    service.name = CreateServiceDto.name;

    return this.serviceRepository.save(service);
  }

  findOne(id: number): Promise<Service> {
    return this.serviceRepository.findOne(id);
  }

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
