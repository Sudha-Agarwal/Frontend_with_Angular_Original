import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-laptop-list',
  templateUrl: './product-laptop-list.component.html',
  styleUrls: ['./product-laptop-list.component.css']
})
export class ProductLaptopListComponent implements OnInit{
category:string='';
products:Product[];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];      
    });
    this.productService.getProducts(this.category).subscribe({
      next: data=>this.products = data,
      error:err => console.log("error"),
      complete: ()=>console.log("complete")
    });
    
  }

  constructor(private productService:ProductService,private route: ActivatedRoute){}



}
