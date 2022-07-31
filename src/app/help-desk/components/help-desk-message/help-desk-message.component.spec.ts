import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskMessageComponent } from './help-desk-message.component';

describe('HelpDeskMessageComponent', () => {
  let component: HelpDeskMessageComponent;
  let fixture: ComponentFixture<HelpDeskMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDeskMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDeskMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
