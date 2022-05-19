import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})

export class ConversionComponent{
  public value:number = 1;
  public currenciesFrom:any;
  public currenciesTo:any;
  public data:any;
  public valueFrom:any;
  public valueTo:any;
  public result:any;
  public flagFrom:string = 'ma'.toLowerCase();
  public flagTo:string = 'us'.toLowerCase();

  constructor(private converterService: CurrencyapidataService) {}

  ngOnInit(): void {
    this.getCountriesFrom();
    this.getCountriesTo();
  }

  getCountriesFrom(){
    this.converterService.getCountries().subscribe(data =>
      this.currenciesFrom = Object.entries(data).map((value) => value[0].toUpperCase())
    );
  }

  getCountriesTo(){
    this.converterService.getCountries().subscribe(data =>
      this.currenciesTo = Object.entries(data).map((value) => value[0].toUpperCase())
    );
  }
  convertCurrency(from: any, to: any, value: number){
    this.converterService.convert(from, to, value).subscribe(data => {
      this.data = Object.entries(data).map(x => x[1])
      this.result = this.data[3];
    });
  }

  getFlag(flag?:any, to?:any){
    this.flagFrom = flag.toString().slice(0, -1).toLowerCase();
    this.flagTo = to.toString().slice(0, -1).toLowerCase();
  }

  inputHandler(event:any) {
    this.value = event.target.value;
  }
}
