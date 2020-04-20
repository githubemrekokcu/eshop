import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:ProductService) { }
  title: string = "Bu Haftanın Ürünleri";
  noProductTitle: string = "Bu Kategoride Ürün Bulunamadı!";
  filterString: string = "";
  products: product[];


  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
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
