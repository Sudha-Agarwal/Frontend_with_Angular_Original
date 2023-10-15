import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{
  name: string = 'john doe';
  amount: number = 1234.5678;
  date: Date = new Date();
  dateString: string = '2023-10-14T12:30:00';

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts("laptop");
  }


}
