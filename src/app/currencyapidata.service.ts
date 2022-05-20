import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyapidataService {

  url:string = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

  constructor(private http: HttpClient) { }

  myHeaders:any = new Headers();
  
  getCountries(){
    return this.http.get(this.url);
  }

  getCurrencyData(source:any, currencies:any){
    return this.http.get(`https://api.apilayer.com/currency_data/live?source=${source}&currencies=${currencies}`, 
    {
      headers: {
        "apikey": "HgVK4apORyExLq8mBc03L2AbyG34C0XP",
      }
    })
  }


  convert(from: string, to: string, amount: number) {
    return this.http.get(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, 
      {
        headers: {
          "apikey": "HgVK4apORyExLq8mBc03L2AbyG34C0XP",
        }
      }
    )
  }
}
