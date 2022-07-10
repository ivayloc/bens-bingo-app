import { TestBed } from '@angular/core/testing';

import { TermsAndConditionsGuard } from './terms-and-conditions.guard';

describe('TermsAndConditionsGuard', () => {
  let guard: TermsAndConditionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TermsAndConditionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
