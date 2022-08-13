import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAboutUs } from '../../state';
import { SiteInfoPageActions } from '../../state/actions';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  getAboutUs$ = new Observable<SafeHtml>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(SiteInfoPageActions.loadAboutUs());
    this.getAboutUs$ = this.store.select(selectAboutUs);
  }
}
