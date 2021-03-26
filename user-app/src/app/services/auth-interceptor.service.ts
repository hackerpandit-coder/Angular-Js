import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService : AuthService) { }

  intercept(req : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{

    const clonedReq = req.clone({
      params : new HttpParams().set("auth", this.authService.getToken())
    })
    return next.handle(clonedReq);

  }

}
