import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T>(values: T[], sortBy?: keyof T | ''): T[] {
    if (!sortBy || sortBy === '')
      return values

    return values.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  }

}
