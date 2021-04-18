import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { District } from '../district/district.entity';
import { Area } from "../area/area.entity";
import {Service} from "../service/service.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({nullable: true})
  point: string;

  @ManyToOne(() => Area, area => area.addresses)
  area: Area;

  @ManyToOne(() => District, district => district.addresses)
  district: District;

  @OneToMany(() => Service, service => service.address)
  services: Service[];
}
