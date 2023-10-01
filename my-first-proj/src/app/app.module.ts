import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileDetailsComponent } from './product-mobile-details/product-mobile-details.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservableComponent } from './observable/observable.component';
import { AllProductsListComponent } from './all-products-list/all-products-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ProductMobileListComponent,
    ProductListComponent,
    ProductMobileDetailsComponent,
    ProductLaptopListComponent,
    LoginFormComponent,
    ModelFormComponent,
    PipesComponent,
    EditProductComponent,
    ParentComponent,
    ChildComponent,
    ObservableComponent,
    AllProductsListComponent,
    PageNotFoundComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
