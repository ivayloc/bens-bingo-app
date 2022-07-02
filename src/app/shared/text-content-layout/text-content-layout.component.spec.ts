import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContentLayoutComponent } from './text-content-layout.component';

describe('TextContentLayoutComponent', () => {
  let component: TextContentLayoutComponent;
  let fixture: ComponentFixture<TextContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextContentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
