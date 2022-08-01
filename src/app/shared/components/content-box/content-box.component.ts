import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
})
export class ContentBoxComponent implements OnInit {
  @ViewChild('titleBlock') hasTitleBlock!: ElementRef<HTMLDivElement>;
  @Input() headerText = '';
  @Input() titleClass = '';
  @Input() isFluid = false;
  @Input() isCompact = false;

  constructor() {}

  ngOnInit(): void {}
}
