import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { Service } from '../service/entity/service.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  groupId: string;

  @Column({nullable: true})
  name: string;

  @Column({default: 0})
  maxMembers: number;

  @Column({default: 0})
  currentMembers: number;

  @ManyToOne(() => Service, service => service.groups)
  service: Service;
}
