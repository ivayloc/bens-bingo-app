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
import { catchError, iif, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static accessToken = localStorage.getItem('jwt');
  refresh = false;

  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accessToken}`,
      },
    });

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !req.url.includes('refresh')) {
          return iif(
            () => !!AuthInterceptor.accessToken,
            this.authService.apiRefreshToken(),
            this.authService.apiLogin()
          ).pipe(
            switchMap(({ access_token }) => {
              AuthInterceptor.accessToken = access_token;

              localStorage.setItem('jwt', access_token);
              return next.handle(
                request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${access_token}`,
                  },
                })
              );
            })
          );
        }

        if (err.status === 401 && req.url.includes('refresh')) {
          localStorage.removeItem('jwt');
        }

        return throwError(() => err);
      })
    );
  }
}
