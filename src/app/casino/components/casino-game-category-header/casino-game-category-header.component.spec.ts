import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoGameCategoryHeaderComponent } from './casino-game-category-header.component';

describe('CasinoGameCategoryHeaderComponent', () => {
  let component: CasinoGameCategoryHeaderComponent;
  let fixture: ComponentFixture<CasinoGameCategoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoGameCategoryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoGameCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
