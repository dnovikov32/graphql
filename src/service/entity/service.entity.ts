import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Address } from '../../address/address.entity';
import { Group } from '../../group/group.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  description: string;

  @ManyToOne(() => Address, address => address.services)
  address: Address;

  @OneToMany(() => Group, group => group.service)
  groups: Group[];
}
