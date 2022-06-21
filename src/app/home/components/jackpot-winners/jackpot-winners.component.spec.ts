import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotWinnersComponent } from './jackpot-winners.component';

describe('JackpotWinnersComponent', () => {
  let component: JackpotWinnersComponent;
  let fixture: ComponentFixture<JackpotWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
