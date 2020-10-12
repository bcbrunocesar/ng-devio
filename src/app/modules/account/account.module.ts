import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AccountAppComponent } from '@moduleAccount/account.app.component';
import { RegisterPageComponent } from '@moduleAccount/pages/register-page/register-page.component';
import { LoginPageComponent } from '@moduleAccount/pages/login-page/login-page.component';
import { AccountRoutingModule } from '@moduleAccount/account.routing.module';
import { AccountService } from '@moduleAccount/services/account.service';
import { RegisterAccountGuard } from '@moduleAccount/guards/register-account/register-account.guard';
import { SharedModule } from '@moduleShared/shared.module';

@NgModule({
  declarations: [
    AccountAppComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SharedModule
  ],
  providers: [
    AccountService,
    RegisterAccountGuard
  ]
})
export class AccountModule { }
