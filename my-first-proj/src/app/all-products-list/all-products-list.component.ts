import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css']
})
export class AllProductsListComponent implements OnInit, OnDestroy{
  categories:string[] = ['Mobiles','Laptops','Furnitures'];
  category:string='';
  products:Product[];
  matchingProducts:Product[];
  selectedProduct:Product = new Product();
  showEditProduct:boolean = false;

  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute, private productService:ProductService, private router: Router ){}

  ngOnInit(): void {
    //this.categories = ['Mobiles','Laptops','Furnitures'];
    this.getData();    
  }

    getData(){
      this.route.queryParams.subscribe((params) => {
        this.category = params['category'];     
       
        this.dataSubscription = this.productService.getProducts(this.category).subscribe({
          next: data=>{this.products = data; this.category=''},
          error:err => console.log("error"),
          complete: ()=>console.log("complete")
        }); 
      });    
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

  navigateToProducts() {
    this.router.navigate(['/products-list']);
  }




  showDetails(product:Product) {
    this.selectedProduct=Object.assign({},product)
    this.showEditProduct = true;
  }
  
  update(product:Product) {
    console.log(product);
    var target=this.products.find(e => e.id==product.id)
    Object.assign(target,product);
    this.showEditProduct = false;
    alert("Product Saved");
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

}
