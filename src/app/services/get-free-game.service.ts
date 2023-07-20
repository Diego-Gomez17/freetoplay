import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  games: any[] = [];

  getData(): Observable<any> {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games';

    return this.http.get(url);
  }
}
