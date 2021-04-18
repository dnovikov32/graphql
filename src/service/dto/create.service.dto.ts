import { ServiceInterface } from '../interface/service.interface';
import {Column, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Address} from "../../address/address.entity";
import {Group} from "../../group/group.entity";

export class CreateServiceDto implements ServiceInterface {
  name: string;
}