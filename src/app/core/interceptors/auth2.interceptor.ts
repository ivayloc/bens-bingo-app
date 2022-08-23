import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAfter } from 'date-fns';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { AppPageActions } from 'src/app/state/actions';
import { AuthService } from '../service/auth.service';
@Injectable()
export class JwtAuthService implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<null | string>(null);

  constructor(private authService: AuthService, private store: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request)).pipe(
      catchError((requestError: HttpErrorResponse) => {
        if (requestError && requestError.status === 401) {
          const jwtExpirationTime = localStorage.getItem('jwtExpirationTime');
          if (jwtExpirationTime) {
            const apiLoginExpired = isAfter(
              new Date(),
              new Date(+jwtExpirationTime)
            );

            if (!apiLoginExpired) {
              this.store.dispatch(AppPageActions.showLogin());
              // return next.handle(request);
            }
            // else {
            //   localStorage.removeItem('jwt');
            //   localStorage.removeItem('jwtExpirationTime');
            // }
          }
          if (this.refreshTokenInProgress) {
            return this.refreshTokenSubject.pipe(
              filter((result) => !!result),
              take(1),
              switchMap(() => next.handle(this.addAuthToken(request)))
            );
          } else {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);

            // return next.handle(this.addAuthToken(request))
            return this.authService.apiLogin().pipe(
              switchMap(({ access_token }) => {
                this.refreshTokenSubject.next(access_token);
                return next.handle(this.addAuthToken(request));
              }),
              finalize(() => (this.refreshTokenInProgress = false))
            );
          }
        } else if (this.refreshTokenSubject.value) {
          return throwError(() => new Error(requestError.message));
        } else {
          // localStorage.removeItem('jvt');
          // localStorage.removeItem('jwtExpirationTime');
          return throwError(() => new Error(requestError.message));
        }
      })
    );
  }

  addAuthToken(request: HttpRequest<any>) {
    // if (request.url.includes('api/slim/refresh')) {
    //   localStorage.clear();
    // }
    const token = this.authService.getAuthToken();

    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
