import { Injectable } from '@angular/core';

import { AuthorizationResponseModel } from '@sharedModels/authorization/authorization-response.model';
import { UserToken } from '@sharedModels/authorization/user-token';

@Injectable({
  providedIn: 'root'
})
export class UserTokenManagementService {
  public getUserAccessToken(): string {
    return localStorage.getItem('devio.user');
  }

  public getUserToken(): string {
    return localStorage.getItem('devio.token');
  }

  public saveUserToken(userToken: UserToken): void {
    localStorage.setItem('devio.token', JSON.stringify(userToken));
  }

  public saveUserAccessToken(user: string): void {
    localStorage.setItem('devio.user', user);
  }

  public saveUserData(authorizationResponseModel: AuthorizationResponseModel): void {
    const { accessToken, userToken } = authorizationResponseModel;

    this.saveUserAccessToken(accessToken);
    this.saveUserToken(userToken);
  }

  public clearUserData(): void {
    localStorage.removeItem('devio.token');
    localStorage.removeItem('devio.user');
  }
}
