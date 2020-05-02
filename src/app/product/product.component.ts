import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //any type of products
  products:any;
  //inject the service
  //to accept this in inti method, we have to define scope proivate and then call service method using this.
  constructor(private service: ProductService) {
  // initialize list of rpoducts
  //this.products= service.getProducts();
  }

  ngOnInit(): void {
    this.products= this.service.getProducts();
  }

}
