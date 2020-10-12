import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserTokenManagementService } from '@services/user-token-management/user-token-management.service';
import { UserToken } from '@sharedModels/authorization/user-token';
import { environment } from '@env/environment';

@Component({
  selector: 'app-menu-auth',
  templateUrl: './menu-auth.component.html',
  styleUrls: ['./menu-auth.component.scss']
})
export class MenuAuthComponent {
  public email: string = '';
  public userAccessToken: string = '';
  public userToken: UserToken;

  constructor(
    private userTokenManagementService: UserTokenManagementService,
    private router: Router) { }

  public userIsAuthenticated(): boolean {
    this.userAccessToken = this.userTokenManagementService.getUserAccessToken();
    this.userToken = this.userTokenManagementService.getUserToken();

    if (this.userToken) {
      this.email = this.userToken.email;
    }

    return this.userToken !== null;
  }

  public logout(): void {
    this.userTokenManagementService.clearUserData();
    this.router.navigate([environment.urls.home]);
  }
}
