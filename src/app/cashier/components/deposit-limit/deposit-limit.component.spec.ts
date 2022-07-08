import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLimitComponent } from './deposit-limit.component';

describe('DepositLimitComponent', () => {
  let component: DepositLimitComponent;
  let fixture: ComponentFixture<DepositLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
