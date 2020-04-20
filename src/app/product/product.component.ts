import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  title: string = "Bu Haftanın Ürünleri";
  noProductTitle: string = "Bu Kategoride Ürün Bulunamadı!";
  filterString: string = "";
  products: product[];
  path:string = "http://localhost:3000/products"; 

  ngOnInit(): void {
    this.http.get<product[]>(this.path).subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: product) {
    try {
      this.alertifyService.succes(product.name + " Ürünü Sepete Eklendi"); 
    } catch (error) {
      this.alertifyService.error(product.name + " Ürünü Sepete Eklenemedi");
    }
  }
}
