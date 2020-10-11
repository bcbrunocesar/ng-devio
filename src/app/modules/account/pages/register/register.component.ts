import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { fromEvent, merge, Observable } from 'rxjs';

import { AlertModel } from '@sharedModels/alert.model';
import { DisplayMessageModel } from '@core/utils/validations/models/display-message.model';
import { ValidationMessagesModel } from '@core/utils/validations/models/validation-messages.model';
import { GenericValidator } from '@core/utils/validations/services/generic-form-validation/generic-form-validation';
import { UserModel } from '@moduleAccount/models/user.model';
import { AccountService } from '@moduleAccount/services/account.service';
import { environment } from '@env/environment';
import { AuthorizationResponseModel } from '@sharedModels/authorization/authorization-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public user: UserModel;
  public registerForm: FormGroup;
  public alert: AlertModel;
  public errorsForm: any[] = [];

  public validationMessages: ValidationMessagesModel;
  public displayMessage: DisplayMessageModel;
  public genericValidator: GenericValidator;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) {
    this.formValidations();
  }

  ngOnInit(): void {
    this.registerFormBuilder();
    this.displayMessage = {};
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.registerForm);
    });
  }

  public handleAddNewAccount(): void {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.accountService.registerUser(this.user)
        .subscribe(
          success => { this.handleSuccess(success) },
          fail => { this.handleFail(fail) }
        );
    }
  }

  private handleSuccess(response: any): void {
    this.registerForm.reset();
    this.errorsForm = [];

    this.accountService.UserTokenManagement.saveUserData(response as AuthorizationResponseModel);
    this.router.navigate([`${environment.urls.home}`]);
  }

  private handleFail(fail: any): void {
    this.errorsForm = fail.error.errors;
    this.alert = {
      title: 'Alguma coisa não deu certo:',
      type: 'danger',
      messages: this.errorsForm as string[]
    }
  }

  private registerFormBuilder(): void {
    let password = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15])
    ]);

    let confirmPassword = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(password)
    ]);

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password,
      confirmPassword
    });
  }

  private formValidations(): void {
    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'E-mail inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informa a senha novamente',
        rangeLength: 'A senhad eve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    }

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
}
