import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoShellComponent } from './bingo-shell.component';

describe('BingoShellComponent', () => {
  let component: BingoShellComponent;
  let fixture: ComponentFixture<BingoShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
