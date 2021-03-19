import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value : any, countryCode : string){
    switch (countryCode) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+12 ' + value;
      case 'EUR':
        return '+32 ' + value;
      default:
        return '+91 ' + value;
    }

  }

}
