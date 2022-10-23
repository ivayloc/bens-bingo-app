import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCardCvvComponent } from './deposit-card-cvv.component';

describe('DepositCardCvvComponent', () => {
  let component: DepositCardCvvComponent;
  let fixture: ComponentFixture<DepositCardCvvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositCardCvvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCardCvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
