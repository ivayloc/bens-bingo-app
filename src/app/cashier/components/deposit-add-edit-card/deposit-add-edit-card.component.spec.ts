import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAddEditCardComponent } from './deposit-add-edit-card.component';

describe('DepositAddEditCardComponent', () => {
  let component: DepositAddEditCardComponent;
  let fixture: ComponentFixture<DepositAddEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositAddEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositAddEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
