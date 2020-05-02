import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//register this services under Providers in app.module.ts file
export class ProductService {

//method to get list of product object
getProducts(){
  return [
    {
      "id":1,
      "name":"watch",
      "brand":"timex",
      "price":5600
    },
    {
      "id":2,
      "name":"mobile",
      "brand":"Xiaomi",
      "price":13000
    },
    {
      "id":3,
      "name":"laptop",
      "brand":"HP",
      "price":56006
    },
    {
      "id":4,
      "name":"shoes",
      "brand":"Adidas",
      "price":2345
    }
  ];
}

  constructor() { }
}
