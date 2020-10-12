import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAlertComponent } from './components/app-alert/app-alert.component';

@NgModule({
  declarations: [
    AppAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppAlertComponent
  ]
})
export class AlertModule { }
