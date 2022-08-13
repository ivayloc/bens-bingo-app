import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5GamesComponent } from './top5-games.component';

describe('Top5GamesComponent', () => {
  let component: Top5GamesComponent;
  let fixture: ComponentFixture<Top5GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5GamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
