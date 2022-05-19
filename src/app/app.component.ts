import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currjson: any = [];
  buyCurrency: any

  constructor(private currency: CurrencyapidataService) {}

  convert() {
    this.currency.getCurrencyData().subscribe(data => {
      this.currjson = JSON.stringify(data)
      this.currjson = JSON.parse(this.currjson)
     
    })
  }
}
