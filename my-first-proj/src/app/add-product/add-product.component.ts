import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  @Output() productAdded:EventEmitter<Product> =new EventEmitter<Product>(); 
  product:Product;
  productForm: FormGroup;
  constructor(private productService:ProductService, private formBuilder: FormBuilder){}
  
  // Define an array of categories
  categories: string[] = ['mobile', 'laptop', 'furniture', 'Toys'];
  
  ngOnInit(): void {
    // Initialize the form with form controls and their initial values (if needed)
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required], // Name is required
      description: ['', Validators.required], // Description is required
      category: ['', Validators.required]
    });
  }
  
  onSubmit(){
    this.product = this.productForm.value;
    this.productService.addProduct(this.product).subscribe({
      next:(data:any)=>{alert("product added")
      this.productAdded.emit(data);
    },
      error:(err:any)=>console.log(err)      
    });
  
    
    //this.showForm = false;
    //this.ngOnInit();
  }

  // Helper function to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }


}
