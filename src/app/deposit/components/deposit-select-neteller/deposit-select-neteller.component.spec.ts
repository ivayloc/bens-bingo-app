import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSelectNetellerComponent } from './deposit-select-neteller.component';

describe('DepositSelectNetellerComponent', () => {
  let component: DepositSelectNetellerComponent;
  let fixture: ComponentFixture<DepositSelectNetellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSelectNetellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositSelectNetellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
