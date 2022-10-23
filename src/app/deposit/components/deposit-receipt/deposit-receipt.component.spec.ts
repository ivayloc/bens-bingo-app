import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositReceiptComponent } from './deposit-receipt.component';

describe('DepositReceiptComponent', () => {
  let component: DepositReceiptComponent;
  let fixture: ComponentFixture<DepositReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
