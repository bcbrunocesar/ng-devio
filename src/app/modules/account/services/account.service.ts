import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from '@services/base/base.service';
import { UserModel } from '@moduleAccount/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public registerUser(userModel: UserModel): Observable<UserModel> {
    let response = this.httpClient
      .post(`${this.urlServiceV1 }/nova-conta`, userModel, this.GetHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );

    return response;
  }

  public login(user: UserModel) {

  }
}
