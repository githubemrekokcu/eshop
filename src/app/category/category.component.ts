import { Component, OnInit } from '@angular/core';
import { category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title:string="Kategori Listesi";
  categories:category[] = [
    {id:1,name:"Bilgisayar",categoryGroupId:1},
    {id:1,name:"Çevre Bileşenleri",categoryGroupId:2}
  ]
  
  ngOnInit(): void {
  }

}
