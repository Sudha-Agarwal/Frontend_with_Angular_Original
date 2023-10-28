import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from './_services/product.service';
import { DataService } from './_services/data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
token:string;

  constructor(private ds:DataService) {
    
  }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Clone the request and add the Authorization header with the JWT token
    this.token = this.ds.getToken();
    console.log(this.token);
    if (this.token) {
      console.log("interceptor");
      request = request.clone({
        setHeaders: {
          Authorization: this.token
        }
      });
    }
    // Pass on the modified request to the next handler
    return next.handle(request);

  }
}
