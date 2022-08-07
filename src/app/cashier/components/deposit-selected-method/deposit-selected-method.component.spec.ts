import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSelectedMethodComponent } from './deposit-selected-method.component';

describe('DepositSelectedMethodComponent', () => {
  let component: DepositSelectedMethodComponent;
  let fixture: ComponentFixture<DepositSelectedMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSelectedMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSelectedMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
