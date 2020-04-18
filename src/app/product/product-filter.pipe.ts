import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: product[], filterStirng?: string): product[] {
    filterStirng = filterStirng ? filterStirng.toLocaleLowerCase() : null;
    return filterStirng ? value.filter((p: product) => p.name.toLocaleLowerCase().indexOf(filterStirng) !== -1):value;
  }

}