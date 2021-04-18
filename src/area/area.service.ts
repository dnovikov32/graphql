import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaCreateDto } from './dto/area.create.dto';
import { Area } from './area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
  ) {}

  create(dto: AreaCreateDto): Promise<Area> {
    const area = new Area();

    area.name = dto.name;

    return this.areaRepository.save(area);
  }

  findOne(id: number): Promise<Area> {
    return this.areaRepository.findOne(id);
  }

  findAll(): Promise<Area[]> {
    return this.areaRepository.find();
  }

}
