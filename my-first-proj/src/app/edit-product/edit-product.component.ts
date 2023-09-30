import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product:Product = new Product();
  @Output() productChange:EventEmitter<Product> =new EventEmitter<Product>(); 

  update() {
    this.productChange.emit(this.product);
  }
}
