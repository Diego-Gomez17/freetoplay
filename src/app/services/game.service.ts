import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getGames(): Observable<any[]> {
    return this.gamesSubject.asObservable();
  }

  setGames(games: any[]): void {
    this.gamesSubject.next(games);
  }

  filterGames(filters: any): void {
    const currentGames = this.gamesSubject.value;
    const filteredGames = currentGames.filter((game) => {
      if (filters.name && game.title) {
        const lowerCaseName = game.title.toLowerCase();
        const lowerCaseFilter = filters.name.toLowerCase();
        return lowerCaseName.includes(lowerCaseFilter);
      }
      return true;
    });
    this.gamesSubject.next(filteredGames);
  }
}
