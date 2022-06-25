import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWinnersComponent } from './recent-winners.component';

describe('RecentWinnersComponent', () => {
  let component: RecentWinnersComponent;
  let fixture: ComponentFixture<RecentWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
