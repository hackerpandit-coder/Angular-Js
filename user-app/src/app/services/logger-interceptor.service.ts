import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggerInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{

    console.log("Inside logger......")
    return next.handle(req).pipe(tap(value => {
      console.log("Value : ", value);
      return value;
    }))

  }

  
}
