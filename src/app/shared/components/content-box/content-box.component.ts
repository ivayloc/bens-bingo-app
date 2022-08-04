import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
})
export class ContentBoxComponent {
  @ViewChild('titleBlock') hasTitleBlock!: ElementRef<HTMLDivElement>;
  @ViewChild('footerBlock') hasFooterBlock!: ElementRef<HTMLDivElement>;
  @Input() headerText = '';
  @Input() titleClass = '';
  @Input() isFluid = false;
  @Input() isCompact = false;

  // public get hasFooterBlock() {
  //   return this.footerBlock?.nativeElement;
  // }

  constructor() {}
}
