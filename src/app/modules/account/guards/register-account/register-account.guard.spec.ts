import { TestBed } from '@angular/core/testing';

import { RegisterAccountGuard } from './register-account.guard';

describe('RegisterAccountGuard', () => {
  let guard: RegisterAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
