import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusCodeComponent } from './bonus-code.component';

describe('BonusCodeComponent', () => {
  let component: BonusCodeComponent;
  let fixture: ComponentFixture<BonusCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
