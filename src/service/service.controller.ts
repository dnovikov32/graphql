import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceInterface } from './interface/service.interface';
import { CreateServiceDto } from './dto/create.service.dto';
import { Service } from './entity/service.entity';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  create(@Body() dto: CreateServiceDto): Promise<Service> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<ServiceInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async finOne(@Param('id', ParseIntPipe) id: number): Promise<Service> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
