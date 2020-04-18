import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title:String = "Bu Haftanın Ürünleri";
  noProductTitle:String = "Bu Kategoride Ürün Bulunamadı!";
  filterString = "";
  products:product[] = [
    {id:1,name:"NoteBook",price:3999,categoryId:1, description:"Casper Nirvana",imageUrl:"./assets/images/casper-nirvana.jpg"},
    {id:2,name:"Keyboard",price:545,categoryId:2, description:"Logitech",imageUrl:"./assets/images/logirach-keyboard.jpg"},
    {id:3,name:"NoteBook",price:3999,categoryId:1, description:"Casper Nirvana",imageUrl:"./assets/images/casper-nirvana.jpg"},
    {id:4,name:"Keyboard",price:545,categoryId:2, description:"Logitech",imageUrl:"./assets/images/logirach-keyboard.jpg"},
    {id:5,name:"NoteBook",price:3999,categoryId:1, description:"Casper Nirvana",imageUrl:"./assets/images/casper-nirvana.jpg"},
    {id:6,name:"Keyboard",price:545,categoryId:2, description:"Logitech",imageUrl:"./assets/images/logirach-keyboard.jpg"},

  ];

  ngOnInit(): void {
  }

}
