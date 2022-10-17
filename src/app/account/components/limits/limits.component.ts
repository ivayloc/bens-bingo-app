import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.scss'],
})
export class LimitsComponent {
  timeFrameField = this.fb.control('24');

  constructor(private fb: UntypedFormBuilder) { }
}
