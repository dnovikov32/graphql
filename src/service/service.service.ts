import { Injectable } from '@nestjs/common';
import { ServiceInterface } from './interface/service.interface';

@Injectable()
export class ServiceService {
  private readonly services: ServiceInterface[] = [];

  create(service: ServiceInterface) {
    this.services.push(service);
  }

  findAll(): ServiceInterface[] {
    return this.services;
  }
}
