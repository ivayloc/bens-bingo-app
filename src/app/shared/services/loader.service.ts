import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, iif, Subject } from 'rxjs';
import { finalize, tap, switchMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService implements HttpInterceptor {
  delay = 1000; //spinner visualization delay;

  isLoading$: Observable<boolean>;
  requests: HttpRequest<any>[] = [];
  readonly remove = true;

  private loadingSubject$ = new Subject<boolean>();

  constructor() {
    this.isLoading$ = this.loadingSubject$.asObservable().pipe(
      switchMap((loading) => {
        return iif(
          () => loading,
          of(loading),
          of(loading).pipe(delay(this.delay))
        );
      })
    );
  }

  private processReqAndShowOrHideLoader(
    req: HttpRequest<any>,
    remove?: boolean
  ): void {
    if (remove) {
      const index = this.requests.indexOf(req);
      this.requests.splice(index, 1);
    } else {
      this.requests.push(req);
    }
    this.loadingSubject$.next(!!this.requests.length);
  }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.processReqAndShowOrHideLoader(req);
    return next
      .handle(req)
      .pipe(
        finalize(() => this.processReqAndShowOrHideLoader(req, this.remove))
      );
  }
}
