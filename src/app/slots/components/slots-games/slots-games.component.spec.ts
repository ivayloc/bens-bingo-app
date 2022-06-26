import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsGamesComponent } from './slots-games.component';

describe('SlotsGamesComponent', () => {
  let component: SlotsGamesComponent;
  let fixture: ComponentFixture<SlotsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
