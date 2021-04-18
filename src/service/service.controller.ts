import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceCreateDto } from './dto/service.create.dto';
import { Service } from './entity/service.entity';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  create(@Body() dto: ServiceCreateDto): Promise<Service> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Service[]> {
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
