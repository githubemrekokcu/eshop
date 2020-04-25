import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path:string = "http://localhost:3000/categories"; 
  
  getCategories():Observable<category[]>{
    return this.http.get<category[]>(this.path).pipe(
      tap(data => {
        console.log((data));
      }),
      catchError(this.handleError)
    );
  }
  handleError(handleError: HttpErrorResponse) {
    let errorMessage = '';
    if(handleError.error instanceof ErrorEvent){
      errorMessage = "Hata Oluştu! "+ handleError.error.message;
    }else{
      errorMessage = "Sistemsel bir hata Oluştu! ";
    }
    return throwError(errorMessage);
  }
}
