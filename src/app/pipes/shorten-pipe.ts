import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number = 40): string {
    const shorten_val = value.slice(0, limit)
    return shorten_val + '...';
  }

}
