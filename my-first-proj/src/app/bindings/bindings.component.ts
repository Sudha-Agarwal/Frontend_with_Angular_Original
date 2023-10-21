import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {

  buttonDisabled = true;

  imgPath!:string;

  isActive = true;


  cssStringVar: string= 'red size20';

  products!: any[];

  ngOnInit(): void {
    this.products = [{
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:10
    },
    {
      description:'TV',
      price:10000,
      stock:0
    }  
  ];

  }

  isProductInStock(product: any): boolean {
    return product.stock > 0;
  }

  hasError(){
    return true;
  }
  isHighlighted = true;

  getStyle() {
    return {
      'font-size': this.isHighlighted ? '20px' : '16px',
      'color': this.isHighlighted ? 'red' : 'black'
    };
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

}
