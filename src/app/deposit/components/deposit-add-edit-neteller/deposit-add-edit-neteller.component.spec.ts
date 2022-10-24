import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAddEditNetellerComponent } from './deposit-add-edit-neteller.component';

describe('DepositAddEditNetellerComponent', () => {
  let component: DepositAddEditNetellerComponent;
  let fixture: ComponentFixture<DepositAddEditNetellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositAddEditNetellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositAddEditNetellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
