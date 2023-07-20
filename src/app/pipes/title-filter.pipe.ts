import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCardGame=[];
    for(const game of value){
      if(game.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCardGame.push(game)
      }
    }
    return resultCardGame
  }

}
