import { TestBed } from '@angular/core/testing';
import { ApiAuthGuard } from './api-auth.guard';

describe('ApiLoginGuard', () => {
  let guard: ApiAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApiAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
