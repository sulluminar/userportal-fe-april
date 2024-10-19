import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // 1st argument is the item that need to be transformed
  // 2nd argumnet is, based on which value, the tarnformation done
  transform(allEmployee: any[], searchKey: string): any[] {
    console.log("==inside pipe===");
    console.log(searchKey);
    console.log(allEmployee)
    const result: any = [];
    if (!allEmployee || searchKey === '') {
      return allEmployee;
    }
    allEmployee.forEach((item: any) => {
      if (item.username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item)
      }
    })
    return result;
  }

}
