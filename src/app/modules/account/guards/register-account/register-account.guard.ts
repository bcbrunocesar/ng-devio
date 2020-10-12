import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { RegisterPageComponent } from '@moduleAccount/pages/register-page/register-page.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterAccountGuard implements CanDeactivate<RegisterPageComponent> {
  canDeactivate(component: RegisterPageComponent): boolean {
    if (!component.isFormChangesNotSaved) {
      return true;
    }

    return window.confirm('Tem certeza que deseja abandonar o preenchmento do formulário?')
  }
}
