import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ModalService } from '../../shared/modals/modal.service';
import { inject } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const modalService = inject(ModalService);
  const logger = inject(LoggerService);
  return next(req).pipe(
    catchError((error) => {
      modalService.toggleErrorModal();
      logger.logError(error);
      return throwError(() => error);
    })
  );
}
