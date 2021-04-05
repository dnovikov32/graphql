import {Controller, Get, Post, Body, HttpException, HttpStatus, Param, ParseIntPipe} from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceInterface } from './interface/service.interface';
import { CreateServiceDto } from './dto/create.service.dto';

// import { Request } from 'express';
// import { CreateServiceDto } from './create.service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  create(@Body() dto: CreateServiceDto) {
    this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<ServiceInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async finOne(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return `ID # ${id}`;
  }

  @Get('exception')
  async testException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
