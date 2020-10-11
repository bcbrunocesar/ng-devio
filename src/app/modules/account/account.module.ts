import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AccountAppComponent } from '@moduleAccount/account.app.component';
import { RegisterComponent } from '@moduleAccount/pages/register/register.component';
import { LoginComponent } from '@moduleAccount/pages/login/login.component';
import { AccountRoutingModule } from '@moduleAccount/account.routing.module';
import { AccountService } from '@moduleAccount/services/account.service';
import { SharedModule } from '@moduleShared/shared.module';

@NgModule({
  declarations: [
    AccountAppComponent,
    RegisterComponent,
    LoginComponent
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
  providers: [AccountService]
})
export class AccountModule { }
