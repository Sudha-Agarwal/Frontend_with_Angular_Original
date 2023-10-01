import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent implements OnInit{
  category:string = '';
  matchingProducts:Product[];
  selectedProduct:Product = new Product();
  showEditProduct:boolean = false;

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
  constructor(private route: ActivatedRoute,private router: Router) {}

  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
    { id: 2, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
    { id: 3, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  ];

  ngOnInit(): void {
    
    /*this.productService.getProducts("Mobile")
    .subscribe(products => {this.products = products;
    this.lastId = this.products[this.products.length-1].id});
    this.createForm();   */

        // Subscribe to the paramMap observable to get the query parameter value
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.matchingProducts = this.products.filter(product => product.category === this.category);
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

}
