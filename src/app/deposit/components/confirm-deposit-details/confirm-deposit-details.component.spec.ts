import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDepositDetailsComponent } from './confirm-deposit-details.component';

describe('ConfirmDepositDetailsComponent', () => {
  let component: ConfirmDepositDetailsComponent;
  let fixture: ComponentFixture<ConfirmDepositDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDepositDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDepositDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
