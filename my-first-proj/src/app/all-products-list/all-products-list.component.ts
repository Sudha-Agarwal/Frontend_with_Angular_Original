import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css']
})
export class AllProductsListComponent implements OnInit{
  categories:string[] = ['Mobiles','Laptops','Furnitures'];
  category:string='';
  products:Product[];

  constructor(private route: ActivatedRoute, private productService:ProductService ){}

  ngOnInit(): void {
    this.categories = ['Mobiles','Laptops','Furnitures'];
    
  }

    getData(){
      this.route.queryParams.subscribe((params) => {
        this.category = params['category'];          
        this.productService.getProducts(this.category).subscribe({
          next: data=>{this.products = data; this.category=''},
          error:err => console.log("error"),
          complete: ()=>console.log("complete")
        }); 
      });

     

    

    


    
  }

}
