import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardGame } from '../../models/card-game.models';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GetCardGame {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = `${this.apiUrl}/api/games`;
    return this.http.get<CardGame[]>(url);
  }
  getDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/game?id=${id}`;
    return this.http.get<any>(url);
  }

}
