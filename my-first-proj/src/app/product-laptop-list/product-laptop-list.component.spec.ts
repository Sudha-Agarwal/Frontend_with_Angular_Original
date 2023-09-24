import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaptopListComponent } from './product-laptop-list.component';

describe('ProductLaptopListComponent', () => {
  let component: ProductLaptopListComponent;
  let fixture: ComponentFixture<ProductLaptopListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLaptopListComponent]
    });
    fixture = TestBed.createComponent(ProductLaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
