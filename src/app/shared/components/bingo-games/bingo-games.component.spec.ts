import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGamesComponent } from './bingo-games.component';

describe('BingoGamesComponent', () => {
  let component: BingoGamesComponent;
  let fixture: ComponentFixture<BingoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
