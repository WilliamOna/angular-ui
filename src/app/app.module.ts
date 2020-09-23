import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { EllipsifyPipe } from './products/ellipsify.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductComponent, EllipsifyPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
