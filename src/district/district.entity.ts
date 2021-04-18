import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Area } from '../area/area.entity';
import { Address } from '../address/address.entity';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Area, area => area.districts)
  area: Area;

  @OneToMany(() => Address, address => address.district)
  addresses: Address[];
}
