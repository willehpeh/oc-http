import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs';
import { LoggerService } from './logger.service';
import { inject } from '@angular/core';

export const loggerInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const logger = inject(LoggerService);
  return next(req).pipe(
    filter(event => event instanceof HttpResponse),
    tap(event => logger.log(event))
  );
}
