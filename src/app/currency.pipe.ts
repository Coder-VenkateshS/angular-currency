import { Pipe, PipeTransform } from '@angular/core';
import { Rates } from './rates';
@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  rates: object;
  rateArray: Array<string>;
  indexFrom: number;
  indexTo:number;
  selectedFrom: number;
  selectedTo: number;

  constructor() {
    this.rateArray = [];
    this.indexFrom = 0;
    this.selectedFrom = 0;
    this.selectedTo = 0;
  }

  transform(c1: any, c2: any, amount:number) {

    var t1:number=Number(c1);
    console.log(t1);
    var t2:number=Number(c2);
    console.log(t2);
    var data:number =t1/t2;
    console.log(data);
    var result:number=data*amount;
    console.log(result);


  //   // Get rates Object from rates.ts
  //   this.rates = new Rates().rates;
  //   //console.log(`rates`+this.rates);
  //   // Get all the keys i.e the currency names
  //   this.rateArray = Object.keys(this.rates);
  // //  console.log(`rateArray`+this.rateArray);
  //   // Search the index of the selected currency name in array
  //   this.indexFrom = this.rateArray.indexOf(args);
  //   this.indexTo = this.rateArray.indexOf(args);
  //  // console.log(`index`+this.indexFrom);
  //   // Get the value of the selected currency i.e rate of selected currency from the object
  //   this.selectedFrom = this.rates[Object.keys(this.rates)[this.indexFrom]];
  //   this.selectedTo = this.rates[Object.keys(this.rates)[this.indexTo]];
  //   console.log(`selected currency value = `+ this.selectedFrom);

  //   for (const i in this.rates) {
  //     if (this.rates.hasOwnProperty(i)) {
  //       // Apply the formula ( Rate of (currency in which we need to convert) / Rate of selected currency ) * number of units
  //       this.rates[i] = ((this.rates[i] / this.selectedFrom) * value).toFixed(2);
  //     }
  //   }
      return Math.round(result);
  }
}
