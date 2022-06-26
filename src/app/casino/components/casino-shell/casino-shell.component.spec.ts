import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoShellComponent } from './casino-shell.component';

describe('CasinoShellComponent', () => {
  let component: CasinoShellComponent;
  let fixture: ComponentFixture<CasinoShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasinoShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
