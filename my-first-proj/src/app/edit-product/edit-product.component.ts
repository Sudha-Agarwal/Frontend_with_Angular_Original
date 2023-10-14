import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product:Product;
  @Output() productChange:EventEmitter<Product> =new EventEmitter<Product>(); 

  constructor(private productService:ProductService){}
  update() {
    this.productService.updateProduct(this.product).subscribe({
      next:data=>{
        // Notify the parent component
        this.productChange.emit(this.product);
        alert("Product updated")
      } ,
      error: err=>alert(err),
      complete:()=>console.log("done")
    });     
    
    //this.productChange.emit(this.product);
  }
}
