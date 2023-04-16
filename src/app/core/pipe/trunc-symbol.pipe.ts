import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncSymbol',
})
export class TruncSymbolPipe implements PipeTransform {
  transform(value: string, symbol: string): string {
    if (!value || !symbol) {
      return value;
    }

    // Find the index of the first occurrence of the symbol
    const index = value.indexOf(symbol);

    // Return the truncated value up to the index
    return index !== -1 ? value.substr(0, index) : value;
  }
}
