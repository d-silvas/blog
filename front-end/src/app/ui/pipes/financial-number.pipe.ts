import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'financialNumber' })
export class FinancialNumberPipe implements PipeTransform {
  static readonly OneBillion = 1000000000;
  static readonly OneMillion = 1000000;

  constructor(private readonly _decimalPipe: DecimalPipe) { }

  // TODO ? accept different dividers (thousands, millions, etc)
  // TODO ? parenthesis and RED if negative
  transform(value: string | number, format: string = '1.3-3'): string | number | null {
    if (!value) {
      return null;
    }

    try {
      const numberValue = Number(value);
      const billions = numberValue / FinancialNumberPipe.OneBillion;
      if (billions > 0.5 || billions < -0.5) {
        return this._decimalPipe.transform(billions, format) + ' B';
      }
      const millions = numberValue / FinancialNumberPipe.OneMillion;
      if (millions > 0.5 || millions < -0.5) {
        return this._decimalPipe.transform(millions, format) + ' M';
      }
      return this._decimalPipe.transform(Number(value), format);
    } catch {
      console.warn(`[FinancialNumberPipe] Could not transform ${value}`)
    }

    return null;
  }

}
