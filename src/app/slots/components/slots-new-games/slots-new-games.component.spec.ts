import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsNewGamesComponent } from './slots-new-games.component';

describe('SlotsNewGamesComponent', () => {
  let component: SlotsNewGamesComponent;
  let fixture: ComponentFixture<SlotsNewGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsNewGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsNewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
