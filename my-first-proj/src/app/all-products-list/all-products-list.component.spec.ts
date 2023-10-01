import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsListComponent } from './all-products-list.component';

describe('AllProductsListComponent', () => {
  let component: AllProductsListComponent;
  let fixture: ComponentFixture<AllProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsListComponent]
    });
    fixture = TestBed.createComponent(AllProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
