import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() { }
  getMessage(title:string):string{
    return title
  }

  async getAllProducts(){
    const res = await fetch('https://fakestoreapi.com/products')
    console.log("res",res)
  }
}
