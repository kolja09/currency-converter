import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyapidataService {

  constructor(private http:HttpClient) { }

  getCurrencyData(){
    let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
    return this.http.get(url)
  }
}
