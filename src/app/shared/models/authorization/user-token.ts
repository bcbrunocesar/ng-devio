import { Claim } from './claim';

export interface UserToken {
  id: string;
  email: string;
  claims: Claim[];
}
