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
selectedProduct:Product = new Product();
  showEditProduct:boolean = false;
  showAddProduct:boolean=false;

  ngOnInit(): void {
    this.loadProducts();
  }

  showDetails(product:Product) {
    this.selectedProduct=Object.assign({},product)
    this.showEditProduct = true;
  }

  loadProducts() {   
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];      
    });
    this.productService.getProducts(this.category).subscribe({
      next: data=>this.products = data,
      error:err => console.log("error"),
      complete: ()=>console.log("complete")
    });
  }
  
  update(product:Product) {
    /*console.log(product);
    var target=this.products.find(e => e.id==product.id)
    Object.assign(target,product);
    this.showEditProduct = false;
    alert("Product Saved");*/

    this.loadProducts(); // Refresh the product list after an update
    this.selectedProduct = null; // Hide the update form
    
  }
  deleteProduct(id: number): void {
    /*if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
      this.products = this.products.filter(p => p.id !== id);
    }*/
  }
  showAddForm(){
    this.showAddProduct = true;
  }

  add(product:Product){
    this.products.push(product);
    //this.loadProducts();

  }

  constructor(private productService:ProductService,private route: ActivatedRoute){}
}
