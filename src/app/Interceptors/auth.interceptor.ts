import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Array of excluded routes
  const excludedRoutes = [
    'auth/authenticate',
    'auth/register',
    // Add other routes you want to exclude
  ];

  // Check if the request URL matches any of the excluded routes
  const isExcluded = excludedRoutes.some(route => req.url.includes(route));
  if (isExcluded) {
    return next(req);
  }

  // Subject to queue requests while token is being refreshed
  const tokenRefreshedSubject = new BehaviorSubject<boolean | null>(null);

  // Get token from AuthService
  const token = authService.getToken();

  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        if (!authService.isRefreshing) {
          authService.isRefreshing = true;

          return authService.authenticate(authService.getTicket()!).pipe(
            switchMap((newToken: string) => {
              authService.setToken(newToken);
              authService.isRefreshing = false;
              tokenRefreshedSubject.next(true);

              const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
              return next(retryReq);
            }),
            catchError((refreshError) => {
              authService.isRefreshing = false;
              authService.logout();
              tokenRefreshedSubject.next(false);

              router.navigate(['/auth']);
              return throwError(() => refreshError);
            })
          );
        } else {
          return tokenRefreshedSubject.pipe(
            filter((status) => status !== null),
            take(1),
            switchMap((status) => {
              if (status === true) {
                const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${authService.getToken()}` } });
                return next(retryReq);
              } else {
                return throwError(() => new Error('Token refresh failed, please log in again.'));
              }
            })
          );
        }
      }

      return throwError(() => error);
    })
  );
};