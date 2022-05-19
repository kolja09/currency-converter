import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})

export class ConversionComponent{

  currjson:any  = [];
  arrCcy: any;
  arrBuy:any;
  count:string | number = 0;
  base = 'UAH';
  cont2 = 'USD';
  result: number = 0;

  changeBase(a: string) {
    this.base = a
  }

  toCountry(b: string){
    this.cont2 = b;   
  }

  inputHandler(event:any) {
    const value = event.target.value
    this.count = value
  }

  constructor(private currency: CurrencyapidataService) {}

  convert(): void {
    this.currency.getCurrencyData().subscribe(data => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);

      this.arrCcy = this.currjson.map((el:any) => el.ccy);
      this.arrBuy = this.currjson.map((el:any) => el.buy);
      
      if(this.cont2 === this.arrCcy[0]){
        this.result = +this.count * this.arrBuy[0]
      }
      else if(this.cont2 === this.arrCcy[1]){
        this.result = +this.count * this.arrBuy[1]
      }
      else if(this.cont2 === 'UAH'){
        this.result = +this.count * 1
      }
    }) 
  }
  
}
