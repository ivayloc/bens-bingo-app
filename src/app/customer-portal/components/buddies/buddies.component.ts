import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.scss'],
})
export class BuddiesComponent {
  searchBuddyField = this.fb.control('');

  constructor(private fb: FormBuilder) {}
}
