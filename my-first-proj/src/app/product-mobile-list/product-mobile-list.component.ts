import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent implements OnInit{
  
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,type:"Mobile"},
    { id: 2, name: 'Product 2', description: 'Description 2' ,type:"Mobile"},
    { id: 3, name: 'Product 3', description: 'Description 3' ,type:"Laptop"},
  ];

  ngOnInit(): void {
    
    /*this.productService.getProducts("Mobile")
    .subscribe(products => {this.products = products;
    this.lastId = this.products[this.products.length-1].id});
    this.createForm();   */

    
  }

  deleteProduct(id: number): void {
    /*if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
      this.products = this.products.filter(p => p.id !== id);
    }*/
  }
  createForm(){
   /* this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)     
    });*/
  }

  onSubmit(){

    /*const product:Product = {
      id:this.lastId + 1,
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      type:'Mobile'    
    };  
    this.productService.addProduct(product);
    this.showForm = false;
    this.ngOnInit();*/
  }

  toggleForm() {
    /*this.showForm = !this.showForm;*/
  }

}
