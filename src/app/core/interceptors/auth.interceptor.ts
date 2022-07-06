import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let jwt = localStorage.getItem('jwt');
    const timeNow = new Date().getTime();
    const jwtExpirationTime = +(
      localStorage.getItem('jwtExpirationTime') || ''
    );

    // if (timeNow > jwtExpirationTime) {
    //   localStorage.removeItem('jwt');
    //   localStorage.removeItem('jwtExpirationTime');
    //   jwt = '';
    // }

    if (jwt) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + jwt),
      });

      return next.handle(cloned).pipe(
        catchError((error) => {
          localStorage.removeItem('jwt');
          return of(error);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
