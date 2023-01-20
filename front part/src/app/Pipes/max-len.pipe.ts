import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLen'
})
export class MaxLenPipe implements PipeTransform {

  transform(value: string,length:number): string {
    if(length>value.length)
      return value
     else
    return value.substring(0,length)+"..";
  }

}
