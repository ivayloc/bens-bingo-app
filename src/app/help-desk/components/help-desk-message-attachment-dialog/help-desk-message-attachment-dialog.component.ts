import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-help-desk-message-attachment-dialog',
  templateUrl: './help-desk-message-attachment-dialog.component.html',
  styleUrls: ['./help-desk-message-attachment-dialog.component.scss'],
})
export class HelpDeskMessageAttachmentDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public attachment: string) {}

  ngOnInit(): void {}
}
