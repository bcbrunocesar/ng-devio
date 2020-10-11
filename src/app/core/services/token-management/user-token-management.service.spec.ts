import { TestBed } from '@angular/core/testing';

import { UserTokenManagementService } from './user-token-management.service';

describe('LocalStorageService', () => {
  let service: UserTokenManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTokenManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
