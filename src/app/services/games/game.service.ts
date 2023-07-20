import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CardGame } from '../../models/card-game.models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getGames(): Observable<CardGame[]> {
    return this.gamesSubject.asObservable();
  }

  setGames(games: any[]): void {
    this.gamesSubject.next(games);
  }
}
