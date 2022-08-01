import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskMessage } from '../../models/help-desk-message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit {
  @Input() messages = {} as MatTableDataSource<HelpDeskMessage>;
  @Output() viewMessage = new EventEmitter<number>();

  displayedColumns = ['id', 'time', 'title', 'options'];

  constructor() {}

  ngOnInit(): void {}
}
