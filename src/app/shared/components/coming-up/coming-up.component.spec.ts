import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingUpComponent } from './coming-up.component';

describe('ComingUpComponent', () => {
  let component: ComingUpComponent;
  let fixture: ComponentFixture<ComingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
