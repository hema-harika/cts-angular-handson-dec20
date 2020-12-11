import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: number, args: any) {
    if(value >= 60){
      return "First Class";
    } else if(value < 60 && value > 35){
      return "Pass";
    } else if(value <= 35){
      return "Fail";
    }

}
}