import { TestBed } from '@angular/core/testing';

import { LoginAndRegService } from './login-and-reg.service';

describe('LoginAndRegService', () => {
  let service: LoginAndRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAndRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
