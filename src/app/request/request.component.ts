import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestId: number = 1;
  itemType: String = "Buffalo Chicken"
  numberOfItemsRequest:number = 7;
  
  isVisible:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

}
