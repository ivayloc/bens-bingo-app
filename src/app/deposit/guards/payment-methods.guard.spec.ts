import { TestBed } from '@angular/core/testing';

import { PaymentMethodsGuard } from './payment-methods.guard';

describe('PaymentMethodsGuard', () => {
  let guard: PaymentMethodsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentMethodsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
