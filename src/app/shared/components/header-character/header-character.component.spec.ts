import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCharacterComponent } from './header-character.component';

describe('HeaderCharacterComponent', () => {
  let component: HeaderCharacterComponent;
  let fixture: ComponentFixture<HeaderCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
