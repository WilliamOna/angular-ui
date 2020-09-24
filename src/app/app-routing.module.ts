import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'request', component: RequestComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
