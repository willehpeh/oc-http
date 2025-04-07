import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';

@Injectable()
export class LoggerService {

  private _events: HttpEvent<unknown>[] = [];
  private _errors: HttpErrorResponse[] = [];

  log(event: HttpResponse<unknown>): void {
    this._events.push(event);
    console.table(this._events);
  }

  logError(error: HttpErrorResponse): void {
    this._errors.push(error);
    console.table(this._errors);
  }
}
