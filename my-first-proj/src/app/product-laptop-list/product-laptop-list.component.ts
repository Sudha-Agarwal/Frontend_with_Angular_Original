import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';

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
  page = 1; // Set the initial page
  pageSize = 3; // Set the page size
  totalPages:number;
  totalItems:number;
  currentPage = 1;
  totalPagesArray:number[] = []
 
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

    this.productService.getTotalItems(this.category).subscribe({
      next:(data:any)=>{
        this.totalItems = data.totalItems    ;
        console.log("Total items " + this.totalItems);
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    console.log("Total pages: " + this.totalItems);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      }
    });
    
    this.productService.getProductsPagination(this.category,this.page,this.pageSize).subscribe({
      next: data=>this.products = data,
      error:err => console.log("error"),
      complete: ()=>console.log("complete")
    });       
  }

  loadPage(newPage: number) {       
    // Ensure newPage is within valid bounds
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;

      this.productService.getProductsPagination(this.category,this.page,this.pageSize).subscribe({
        next: data=>this.products = data,
        error:err => console.log("error"),
        complete: ()=>console.log("complete")
      });   

  }
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

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loadPage(this.currentPage);
  }

  nextPage() {
    alert(this.currentPage + " " + this.totalPages);
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage(this.currentPage);
    }
  }

  constructor(private productService:ProductService,private route: ActivatedRoute){}
}
