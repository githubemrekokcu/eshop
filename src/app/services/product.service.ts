import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  path: string = "http://localhost:3000/products";

  getProducts(categoryId): Observable<product[]> {
    let dynamicPath = this.path;
    if (categoryId != undefined) {
      dynamicPath += '?categoryId='+categoryId;
    }
    return this.http.get<product[]>(dynamicPath).pipe(
      tap(data => {
        console.log((data));
      }),
      catchError(this.handleError)
    );

  }
  handleError(handleError: HttpErrorResponse) {
    let errorMessage = '';
    if (handleError.error instanceof ErrorEvent) {
      errorMessage = "Hata Oluştu! " + handleError.error.message;
    } else {
      errorMessage = "Sistemsel bir hata Oluştu! ";
    }
    return throwError(errorMessage);
  }
}
