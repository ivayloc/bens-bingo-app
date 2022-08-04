import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskMessageAttachmentDialogComponent } from './help-desk-message-attachment-dialog.component';

describe('HelpDeskMessageAttachmentDialogComponent', () => {
  let component: HelpDeskMessageAttachmentDialogComponent;
  let fixture: ComponentFixture<HelpDeskMessageAttachmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDeskMessageAttachmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDeskMessageAttachmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
