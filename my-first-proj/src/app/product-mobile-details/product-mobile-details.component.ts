import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-mobile-details',
  templateUrl: './product-mobile-details.component.html',
  styleUrls: ['./product-mobile-details.component.css']
})
export class ProductMobileDetailsComponent {
  productId:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

}
