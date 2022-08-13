import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPageContentComponent } from './load-page-content.component';

describe('LoadPageContentComponent', () => {
  let component: LoadPageContentComponent;
  let fixture: ComponentFixture<LoadPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
