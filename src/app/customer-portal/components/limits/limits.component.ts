import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.scss'],
})
export class LimitsComponent {
  timeFrameField = this.fb.control('');

  constructor(private fb: FormBuilder) {}
}
