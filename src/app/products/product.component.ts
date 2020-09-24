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

  _listFilter: string;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = this.products;

  constructor(private productService: ProductService) {
    this.filteredProducts = this.products;
  }

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
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
      },
    });

    // think about this as very very very very very roughly analagous to:
    //fetch('###').then(response=>response.json()).then((data)=>console.log(data))
  }
}
