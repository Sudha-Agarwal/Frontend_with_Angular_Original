import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './_models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Product[], filterString: string): any[] {
    if (!items || !filterString) {
      return items;
    }
    // Convert the filter string to lowercase for case-insensitive filtering
    filterString = filterString.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(filterString));
  }
}
