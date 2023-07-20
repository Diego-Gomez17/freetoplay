import { Pipe, PipeTransform } from '@angular/core';
import { CardGame } from '../models/card-game.models';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: CardGame[], genre: string): CardGame[] {
    if (!genre) {
      return value;
    }
    genre = genre.toLowerCase();
    return value.filter(game => game.genre.toLowerCase().includes(genre));
  }

}
