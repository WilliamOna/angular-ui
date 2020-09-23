import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  products: IProduct[] = [
    {
      format: 'jpeg',
      width: 5616,
      height: 3744,
      filename: '0.jpeg',
      id: 0,
      author: 'Alejandro Escamilla',
      author_url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      post_url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    },
    {
      format: 'jpeg',
      width: 5616,
      height: 3744,
      filename: '1.jpeg',
      id: 1,
      author: 'Alejandro Escamilla',
      author_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
      post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    },
    {
      format: 'jpeg',
      width: 2500,
      height: 1667,
      filename: '10.jpeg',
      id: 10,
      author: 'Paul Jarvis',
      author_url: 'https://unsplash.com/photos/6J--NXulQCs',
      post_url: 'https://unsplash.com/photos/6J--NXulQCs',
    },
    {
      format: 'jpeg',
      width: 2500,
      height: 1656,
      filename: '100.jpeg',
      id: 100,
      author: 'Tina Rataj',
      author_url: 'https://unsplash.com/photos/pwaaqfoMibI',
      post_url: 'https://unsplash.com/photos/pwaaqfoMibI',
    },
    {
      format: 'jpeg',
      width: 5626,
      height: 3635,
      filename: '1000.jpeg',
      id: 1000,
      author: 'Lukas Budimaier',
      author_url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
      post_url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
    },
    {
      format: 'jpeg',
      width: 5616,
      height: 3744,
      filename: '1001.jpeg',
      id: 1001,
      author: 'Danielle MacInnes',
      author_url: 'https://unsplash.com/photos/1DkWWN1dr-s',
      post_url: 'https://unsplash.com/photos/1DkWWN1dr-s',
    },
  ];
  filteredProducts: IProduct[] = this.products;

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
