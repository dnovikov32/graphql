import { ServiceInterface } from '../interface/service.interface';

export class CreateServiceDto implements ServiceInterface {
  id: number;
  title: string;
}
