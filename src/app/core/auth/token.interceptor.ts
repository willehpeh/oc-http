import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenService.userToken()}`
    }
  });
  return next(authReq);
}
