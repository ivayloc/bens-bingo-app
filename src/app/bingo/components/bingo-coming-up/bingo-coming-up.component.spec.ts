import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoComingUpComponent } from './bingo-coming-up.component';

describe('BingoComingUpComponent', () => {
  let component: BingoComingUpComponent;
  let fixture: ComponentFixture<BingoComingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoComingUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoComingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
