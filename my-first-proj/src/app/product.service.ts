import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:3000";
  headers:HttpHeaders;

  constructor(private http_client:HttpClient) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
   }

   getProducts(category:string): Observable<Product[]> {
      const params = new HttpParams().set("category", category);
      return this.http_client.get<Product[]>(`${this.url}/products`,{'headers':this.headers,'params':params});
    
  }


}
