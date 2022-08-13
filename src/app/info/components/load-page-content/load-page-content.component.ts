import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectPageContent } from '../../state';
import { SiteInfoPageActions } from '../../state/actions';

@Component({
  selector: 'app-load-page-content',
  templateUrl: './load-page-content.component.html',
  styleUrls: ['./load-page-content.component.scss'],
})
export class LoadPageContentComponent implements OnInit {
  getPageContent$ = new Observable<SafeHtml>();
  private fragment = '';

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.fragment = fragment;
      }
    });

    const page: string = this.route.snapshot.data['page'];
    this.store.dispatch(SiteInfoPageActions.loadPageContent({ page }));
    this.getPageContent$ = this.store
      .select(selectPageContent)
      .pipe(tap(() => this.scrollToAnchor()));
  }

  private scrollToAnchor() {
    setTimeout(() => {
      if (!this.fragment) {
        return;
      }
      const anchor = document.querySelector<HTMLAnchorElement>(
        `#${this.fragment}`
      );
      if (anchor) {
        anchor.focus();
        anchor.scrollIntoView();
      }
    }, 0);
  }
}
