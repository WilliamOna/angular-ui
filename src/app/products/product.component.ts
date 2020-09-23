import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'List of Products';
  icon: string = 'https://picsum.photos/id/77/30';
  ngOnInit(): void {
    console.log('rendering Product Component');
  }
}
