import { Pipe, PipeTransform } from '@angular/core';
import { CardGame } from '../models/card-game.models';

@Pipe({
  name: 'platformFilter'
})
export class PlatformFilterPipe implements PipeTransform {

  transform(value: CardGame[], platform: string): CardGame[] {
    if (!platform) {
      return value;
    }
    platform = platform.toLowerCase();
    return value.filter(game => game.platform.toLowerCase().includes(platform));
  }

}
