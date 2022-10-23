import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSelectCardComponent } from './deposit-select-card.component';

describe('DepositSelectCardComponent', () => {
  let component: DepositSelectCardComponent;
  let fixture: ComponentFixture<DepositSelectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSelectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositSelectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
