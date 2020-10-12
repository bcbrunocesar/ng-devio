import { AlertTypeEnum } from './alert-type.model';

export interface AlertModel {
  title: string;
  type: AlertTypeEnum;
  messages: string[];
}
