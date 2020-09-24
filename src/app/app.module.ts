import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { EllipsifyPipe } from './products/ellipsify.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestComponent } from './request/request.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, EllipsifyPipe, HomeComponent, NavbarComponent, RequestComponent, Error404Component],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
