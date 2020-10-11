import { UserToken } from './user-token';

export interface AuthorizationResponseModel {
  accessToken: string;
  expiresIn: number;
  userToken: UserToken;
}
