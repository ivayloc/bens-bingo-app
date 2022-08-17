import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositStartComponent } from './deposit-start.component';

describe('DepositStartComponent', () => {
  let component: DepositStartComponent;
  let fixture: ComponentFixture<DepositStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
