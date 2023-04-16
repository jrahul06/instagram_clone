import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    maxLength: number,
    truncated: boolean = true
  ): string {
    if (!value || typeof value !== 'string') {
      return '';
    }

    if (!truncated || value.length <= maxLength) {
      return value;
    }

    return value.slice(0, maxLength) + '...';
  }
}
