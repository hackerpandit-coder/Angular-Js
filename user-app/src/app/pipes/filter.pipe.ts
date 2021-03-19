import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(todoList: any, filterStatus: string){
    console.log("[TRANFORM]")
    if(filterStatus == ''){
      return todoList;
    }

    let resultArray = [];

    for(let todo of todoList){
      if(todo['status'] == filterStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;

  }

}
