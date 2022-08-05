import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWithdrawalComponent } from './request-withdrawal.component';

describe('RequestWithdrawalComponent', () => {
  let component: RequestWithdrawalComponent;
  let fixture: ComponentFixture<RequestWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
