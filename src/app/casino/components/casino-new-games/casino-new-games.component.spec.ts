import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoNewGamesComponent } from './casino-new-games.component';

describe('CasinoNewGamesComponent', () => {
  let component: CasinoNewGamesComponent;
  let fixture: ComponentFixture<CasinoNewGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasinoNewGamesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoNewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
