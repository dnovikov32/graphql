import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { District } from '../district/district.entity';
import {Address} from "../address/address.entity";

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => District, district => district.area)
  districts: District[];

  @OneToMany(() => Address, address => address.area)
  addresses: Address[];
}
