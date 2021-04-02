import { CurrencyPipe } from './currency.pipe';
import { Component } from '@angular/core';
//import * as Rates from './data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [CurrencyPipe]
})

export class AppComponent {
  title = 'angular-currency-converter';

  buttons: any=[
    
      { "id":"USD",  "value": 1.126735},
      { "id":"GBP", "value":0.876893},
      { "id":"INR", "value":79.677056}
  ];
  fromCurrency: object;
  toCurrency: object;
  outputCurrency:number;

constructor(private currencyPipe: CurrencyPipe){

}

convert(c1,c2){
  console.log(c1,c2,this.outputCurrency);
  this.outputCurrency = this.currencyPipe.transform(c1,c2,this.outputCurrency);
  console.log(this.outputCurrency )
  }

  getKeys() {
    return Object.keys(this.toCurrency);
  }


}
