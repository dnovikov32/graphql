import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { Repository } from 'typeorm';
import { ServiceCreateDto } from './dto/service.create.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  create(dto: ServiceCreateDto): Promise<Service> {
    const service = new Service();

    service.name = dto.name;
    service.description = dto.description;

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
