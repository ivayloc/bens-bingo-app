import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsShellComponent } from './slots-shell.component';

describe('SlotsShellComponent', () => {
  let component: SlotsShellComponent;
  let fixture: ComponentFixture<SlotsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
