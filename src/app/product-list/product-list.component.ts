import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  hasChild = false;

  heroName = "windstrom"
  constructor() { }

  ngOnInit(): void {
  }

  products:any = ['Iphone','Nokia','Motorola','Samsung','Lava'];

}
