import { Component, OnInit } from '@angular/core';
//imported user class
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //intialized user class
  user :User={
    "id":98,
    "name":"Akash",
    "email":"akash@gmail.com",
    "mobile":8097904288
  }

  constructor() { }

  ngOnInit(): void {
  }

}
