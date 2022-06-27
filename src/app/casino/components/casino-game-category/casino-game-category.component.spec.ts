import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoGameCategoryComponent } from './casino-game-category.component';

describe('CasinoGameCategoryComponent', () => {
  let component: CasinoGameCategoryComponent;
  let fixture: ComponentFixture<CasinoGameCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoGameCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoGameCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
