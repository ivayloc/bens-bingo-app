import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JackpotComponent } from './jackpot.component';

describe('JackpotWinnersComponent', () => {
  let component: JackpotComponent;
  let fixture: ComponentFixture<JackpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackpotComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
