import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isAfter } from 'date-fns';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
@Injectable()
export class JwtAuthService implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<null | string>(null);

  constructor(private authService: AuthService, private router: Router) {}

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
              new Date(jwtExpirationTime)
            );

            if (!apiLoginExpired) {
              this.router.navigateByUrl('/');
              return next.handle(request);
            }
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

            return this.authService.refreshAuthToken().pipe(
              switchMap((token) => {
                this.refreshTokenSubject.next(token);
                return next.handle(this.addAuthToken(request));
              }),
              finalize(() => (this.refreshTokenInProgress = false))
            );
          }
        } else if (this.refreshTokenSubject.value) {
          return throwError(() => new Error(requestError.message));
        } else {
          localStorage.removeItem('jvt');
          localStorage.removeItem('jwtExpirationTime');
          return throwError(() => new Error(requestError.message));
        }
      })
    );
  }

  addAuthToken(request: HttpRequest<any>) {
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
