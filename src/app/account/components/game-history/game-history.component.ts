import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss'],
})
export class GameHistoryComponent {
  searchGameHistoryForm = this.fb.group({
    enddate: '2022-06-29',
    startdate: '2022-04-01',
  });

  constructor(private fb: FormBuilder) {}
}
