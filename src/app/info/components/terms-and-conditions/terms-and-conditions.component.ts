import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { getTermsAndConditions, State } from '../../state';
import { SiteInfoPageActions } from '../../state/actions';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  getTermsAndConditions$ = new Observable<SafeHtml>();
  private fragment = '';

  constructor(
    private store: Store,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(SiteInfoPageActions.loadTermsAndConditions());

    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.fragment = fragment;
      }
    });

    this.getTermsAndConditions$ = this.store.select(getTermsAndConditions).pipe(
      map((getTermsAndConditionsText) => {
        return this.sanitizer.bypassSecurityTrustHtml(
          getTermsAndConditionsText
        );
      }),
      tap(() => {
        this.scrollToAnchor();
      })
    );
  }

  private scrollToAnchor() {
    setTimeout(() => {
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
