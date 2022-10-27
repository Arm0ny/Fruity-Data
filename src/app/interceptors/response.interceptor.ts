import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map(response => {
        if (response instanceof HttpResponse && !Array.isArray(response.body)) {
          console.log(response.clone({body: [response.body]}))
          return response.clone({body: [response.body]})
        }
          return response

      })
    );
  }
}
