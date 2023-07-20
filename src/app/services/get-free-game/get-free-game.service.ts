import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardGame } from '../../models/card-game.models';


@Injectable({
  providedIn: 'root'
})
export class GetCardGame {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games';

    return this.http.get<CardGame[]>(url);
  }
}
