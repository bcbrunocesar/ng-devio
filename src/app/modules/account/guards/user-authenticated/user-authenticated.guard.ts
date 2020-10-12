import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserTokenManagementService } from '@services/user-token-management/user-token-management.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private userTokenManagementService: UserTokenManagementService,
    private router: Router) { }

  canActivate(): boolean {
    if (!this.userTokenManagementService.getUserToken()) {
      return true
    }

    this.router.navigate([environment.urls.home]);
  }
}
