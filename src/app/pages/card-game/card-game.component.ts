import { Component, OnInit, HostListener } from '@angular/core';

import { CardGame } from '../../models/card-game.models';
import { GetCardGame } from '../../services/get-free-game/get-free-game.service';
import { GameService } from '../../services/games/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent implements OnInit {
  screenWidth: number = window.innerWidth;
  controlWidth: string = 'cont-games';



  public gameService!: GameService;
  public games$!: Observable<CardGame[]>;

  //filters
  public genres: string[] = [];
  public platforms: string[] = [];
  filterName = '';
  filterGender = '';
  filterPlatform = '';

  constructor(gameService: GameService, private GetCardGame: GetCardGame) {
    this.gameService = gameService;
  }


  ngOnInit(): void {
    this.getDataGame();
    this.games$ = this.gameService.getGames();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.controlWidth = 'cont-games-min';
    } else {
      this.controlWidth = 'cont-games';
    }
  }

  getDataGame(): void {
    this.GetCardGame.getData().subscribe(
      (data) => {
        const transformedData: CardGame[] = data.map((game: any) => ({
          id: game.id,
          title: game.title,
          thumbnail: game.thumbnail,
          short_description: game.short_description,
          genre: game.genre,
          platform: game.platform,
        }));
        this.gameService.setGames(transformedData);
        this.genres = [...new Set(transformedData.map((game) => game.genre))];
        this.platforms = [
          ...new Set(transformedData.map((game) => game.platform)),
        ];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
