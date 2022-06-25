import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoNewGamesComponent } from './bingo-new-games.component';

describe('BingoNewGamesComponent', () => {
  let component: BingoNewGamesComponent;
  let fixture: ComponentFixture<BingoNewGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoNewGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoNewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
