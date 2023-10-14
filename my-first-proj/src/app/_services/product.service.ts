import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../_models/product';
import { environment } from '../../environments/environment.development';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    //private url = "http://localhost:3000";
    private url: string = environment.apiUrl;
    headers:HttpHeaders;
    token:string;

  addProduct(product: Product) :Observable<Product>{
    console.log(product);
    return this.http_client.post<Product>(`${this.url}/products`,product)
   
  }


  constructor(private http_client:HttpClient, private ds:DataService) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    this.token = this.ds.getToken();
   
   }

   getProducts(category:string): Observable<Product[]> { 
    this.headers= new HttpHeaders() 
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `${this.ds.getToken()}` ) ;
    //alert(this.ds.getToken());  
    //this.headers.set( 'Authorization', `Bearer this.ds.getToken()}` );
      const params = new HttpParams().set("category", category);
      return this.http_client.get<Product[]>(`${this.url}/products`,{'headers':this.headers,'params':params});
    
  }

  getProductsPagination(category:string, page:number, pageSize:number):Observable<Product[]>{
    
        // Make an HTTP request to the Node.js backend with query parameters
        const params = new HttpParams()
        .set('category',category)
        .set('page', page.toString())
        .set('pageSize', pageSize.toString());
        return this.http_client.get<Product[]>(this.url + '/products/pagination', { params })
  }

  getTotalItems(category:string): Observable<any> {
    const params = new HttpParams()
        .set('category',category);

    return this.http_client.get<any>(this.url + '/products/pagination/items',{ params })
      
  }
  updateProduct(product:Product):Observable<Product[]>{
    return this.http_client.put<Product[]>(`${this.url}/products`,product)
  }


}
