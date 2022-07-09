import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bonus-code',
  templateUrl: './bonus-code.component.html',
  styleUrls: ['./bonus-code.component.scss'],
})
export class BonusCodeComponent implements OnInit {
  bonusCodeField = this.fb.control('');

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
