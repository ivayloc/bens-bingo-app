import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWtihPaymentMethodComponent } from './deposit-wtih-payment-method.component';

describe('DepositWtihPaymentMethodComponent', () => {
  let component: DepositWtihPaymentMethodComponent;
  let fixture: ComponentFixture<DepositWtihPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositWtihPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositWtihPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
