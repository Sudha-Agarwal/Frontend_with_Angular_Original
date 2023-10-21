import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Users } from '../_models/users.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = environment.apiUrl;
  private token: string;

  constructor(private http:HttpClient) { }

  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,category:"Mobile"},
    { id: 2, name: 'Product 2', description: 'Description 2' ,category:"Mobile"},
    { id: 3, name: 'Product 3', description: 'Description 3' ,category:"Laptop"},
  ];

  getProducts(category:string): Observable<Product[]> {
    const product = this.products.filter(p => p.category === category);
    return of(product);
   // return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Product): void {
    // add new product to the list
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    // find the product in the list and update it
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
  }

  deleteProduct(id: number): void {
    // remove the product from the list
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  }

  getObservableData():Observable<any>{
    // Create an Observable
const numberObservable = new Observable<number>((observer) => {
  let count = 1;

  const intervalId = setInterval(() => {
    observer.next(count);
    if (count === 5) {
      observer.complete(); // Indicates that the Observable is done emitting data
      clearInterval(intervalId); // Stop the interval when we're done
    }
    count++;
  }, 1000); // Emit a number every 1000 milliseconds (1 second)
  });
  return numberObservable;
  }

  checkLogin(user:User):Observable<{ message: string, token: string}>{   
    //here we would make connection with the server using HttpClient
    return this.http.post<{ message: string, token: string}>(this.url + '/loginWithRSA', user);
  }

  createNewUser(user:User):Observable<{message:string}>{
    //let userToSend = {email:user.email, firstName:user.name.firstName,lastName:user.name.lastName,password:user.password};
    return this.http.post<{message:string}>(this.url + '/createUser', user);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  deleteToken(){
    delete this.token;
  }



 


}






