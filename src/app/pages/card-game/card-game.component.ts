import { Component, OnInit } from '@angular/core';

import { CardGame } from '../../models/card-game.models';
import { GetCardGame } from '../../services/get-free-game/get-free-game.service';
import { GameService } from '../../services/games/game.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  public gameService!: GameService;
  public games$!: Observable<CardGame[]>;

  //gender
  public genres: string[] = [];
  //platform
  public platforms: string[] = [];

  constructor( gameService: GameService, private GetCardGame: GetCardGame) {
    this.gameService = gameService;
  }

  filterName="";
  filterGender="";
  filterPlatform="";



  ngOnInit(): void {
    this.getDataGame();
    this.games$ = this.gameService.getGames();
  }

  getDataGame(): void {
    this.GetCardGame.getData().subscribe(
      data => {
        const transformedData: CardGame[] = data.map((game: any) => ({
          id: game.id,
          title: game.title,
          thumbnail: game.thumbnail,
          short_description: game.short_description,
          genre: game.genre,
          platform: game.platform,
        }));
        this.gameService.setGames(transformedData);
        this.genres = [...new Set(transformedData.map(game => game.genre))];
        this.platforms = [...new Set(transformedData.map(game => game.platform))];

      },
      error => {
        console.error(error);
      }
    );
  }
}
