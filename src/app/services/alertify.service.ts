import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  succes(message:string):void{
    alertify.success(message);
  }

  error(message:string):void{
    alertify.error(message);
  }
  
}
