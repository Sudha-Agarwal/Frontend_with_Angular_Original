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

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ProductMobileListComponent,
    ProductListComponent,
    ProductMobileDetailsComponent,
    ProductLaptopListComponent,
    LoginFormComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
