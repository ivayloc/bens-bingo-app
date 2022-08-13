import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFaqContent } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  getFaqContent$ = new Observable<string>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadFaqContent());
    this.getFaqContent$ = this.store.select(selectFaqContent);
  }
}
