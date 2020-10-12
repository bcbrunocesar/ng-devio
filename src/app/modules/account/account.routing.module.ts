import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AccountAppComponent } from './account.app.component';
import { RegisterAccountGuard } from './guards/register-account/register-account.guard';
import { UserAuthenticatedGuard } from './guards/user-authenticated/user-authenticated.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '', component: AccountAppComponent,
    children: [
      {
        path: 'register',
        component: RegisterPageComponent,
        canDeactivate: [RegisterAccountGuard],
        canActivate: [UserAuthenticatedGuard]
      },
      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [UserAuthenticatedGuard]
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
