import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobileDetailsComponent } from './product-mobile-details.component';

describe('ProductMobileDetailsComponent', () => {
  let component: ProductMobileDetailsComponent;
  let fixture: ComponentFixture<ProductMobileDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMobileDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductMobileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
