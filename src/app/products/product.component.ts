import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'List of Products';
  icon: string = 'https://picsum.photos/id/77/30';
  showImage: boolean = false;
  //   listFilter: string;
  _listFilter: string;
  products: IProduct[] = this.productService.getProducts();
  filteredProducts: IProduct[] = this.products;

  constructor(private productService: ProductService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this._listFilter.toLowerCase())
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.author.toLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('rendering Product Component');
  }
}
