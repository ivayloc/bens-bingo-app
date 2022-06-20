import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGameDetailsDialogComponent } from './bingo-game-details-dialog.component';

describe('BingoGameDetailsDialogComponent', () => {
  let component: BingoGameDetailsDialogComponent;
  let fixture: ComponentFixture<BingoGameDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoGameDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoGameDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
