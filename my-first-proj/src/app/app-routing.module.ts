import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileDetailsComponent } from './product-mobile-details/product-mobile-details.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { AllProductsListComponent } from './all-products-list/all-products-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {
     path: '',  redirectTo: '/courses', pathMatch: 'full' 
  },
  { path: 'bindings', component: BindingsComponent}, 
  { path: 'products', component:AllProductsListComponent},
  {path: 'product-detail/:id', component:ProductDetailComponent},
  { 
    path: 'products-list', 
    children: [
      { path: '', component: ProductListComponent },
      { path: 'mobile-list', component: ProductMobileListComponent, 
      },
      {path:'mobile-list/:id', component: ProductMobileDetailsComponent},
      { path: 'laptop-list', component: ProductLaptopListComponent },
      { path: 'furniture-list', component: ProductLaptopListComponent },
    ]
  },
  {path: 'login-form', component:LoginFormComponent},
  {path: 'model-form', component:ModelFormComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'animation', component:AnimationComponent},
  {path: '**', component:PageNotFoundComponent}
];


const routes1: Routes = [
  {
     path: '',  redirectTo: '/courses', pathMatch: 'full' 
  },
  { path: 'bindings', component: BindingsComponent}, 
  { path: 'products', component:AllProductsListComponent},
  {path: 'login-form', component:LoginFormComponent},
  {path: 'model-form', component:ModelFormComponent},
  {path: 'pipes', component: PipesComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
