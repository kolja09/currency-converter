import { Component, OnInit } from "@angular/core";
import { CurrencyapidataService } from "../currencyapidata.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
    USD: any = 'USD';
    EUR: any = 'EUR';
    foreignCurrency: any = 'UAH';
    exchangeRateInDollar: any;
    resultInCourseInDollar: any;
    exchangeRateInEuro: any;
    resultInCourseInEuro: any;

    constructor(private currency: CurrencyapidataService) {}

    ngOnInit(): void {
      this.getResultDollar()
      this.getResultEuro()
    }
      
    getResultDollar(){
        this.currency.getCurrencyData(this.USD, this.foreignCurrency).subscribe(data => {
          this.exchangeRateInDollar = Object.entries(data).map((value) => value);
          this.resultInCourseInDollar = this.exchangeRateInDollar[3][1].USDUAH; 
        })
    }

    getResultEuro(){
        this.currency.getCurrencyData(this.EUR, this.foreignCurrency).subscribe(data => {
          this.exchangeRateInEuro = Object.entries(data).map((value) => value);
          this.resultInCourseInEuro = this.exchangeRateInEuro[3][1].EURUAH; 
        })
    }
}