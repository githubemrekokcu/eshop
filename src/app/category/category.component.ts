import { Component, OnInit } from '@angular/core';
import { category } from './category';
import { AlertifyService } from '../services/alertify.service'
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:CategoryService) { }
  title:string="Kategori Listesi";
  categories:category[];
  
  ngOnInit(): void {
    this.productService.getCategories().subscribe(data =>{
      this.categories = data;
    });
  }

}
