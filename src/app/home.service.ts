import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() { }
  getMessage(title:string){
    return title
  }

  async getAllProducts(){
    const res = await fetch('https://fakestoreapi.com/products')
    console.log("res",await res.json())
  }

  async getService(url:any){
    const res = await fetch(url)
    const result = await res.json()
    console.log("result is ",result)
    return result
  }

  async postData(url:string, payload:string) {
    try {
      const response = await fetch(url, {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Convert data to JSON string
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
}
