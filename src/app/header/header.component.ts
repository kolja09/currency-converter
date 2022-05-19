import { Component, OnInit } from "@angular/core";
import { CurrencyapidataService } from "../currencyapidata.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
    
    currjson: any = [];
    buyCurrency: any;
    USDCurrency= 0;
    EURCurrency = 0;

    constructor(private currency: CurrencyapidataService) {}
      
    ngOnInit(): void {
      this.currency.getCurrencyData().subscribe(data => {
        this.currjson = JSON.stringify(data);
        this.currjson = JSON.parse(this.currjson);
        this.buyCurrency = this.currjson.map((el:any )=> el.buy);
      
        this.EURCurrency = this.buyCurrency[1];
        this.USDCurrency = this.buyCurrency[0];
    })
    }
}