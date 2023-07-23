import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCardGame } from '../../services/get-free-game/get-free-game.service';
import { GameDetails } from '../../models/game-details.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  screenWidth: number = window.innerWidth;
  controlWidth: string = 'cont-games';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.controlWidth = 'cont-games-min';
    } else {
      this.controlWidth = 'cont-games';
    }
  }

  game!: GameDetails;

  MinrequirementsArray!: any[];
  ScreenShots: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private GetCardGame: GetCardGame
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params) => {
      const gameId = params['id'];
      this.getDetailsGame(gameId);
    });
  }
  getDetailsGame(id: number) {
    this.GetCardGame.getDataById(id)
      .pipe(
        map((data: any) => {
          const gameDetails: GameDetails = {
            description: data.description,
            developer: data.developer,
            freetogame_profile_url: data.freetogame_profile_url,
            game_url: data.game_url,
            genre: data.genre,
            id: data.id,
            minimum_system_requirements: {
              graphics: data.minimum_system_requirements?.graphics || null,
              memory: data.minimum_system_requirements?.memory || null,
              os: data.minimum_system_requirements?.os || null,
              processor: data.minimum_system_requirements?.processor || null,
              storage: data.minimum_system_requirements?.storage || null,
            },
            platform: data.platform,
            publisher: data.publisher,
            release_date: data.release_date,
            screenshots: data.screenshots,
            short_description: data.short_description,
            status: data.status,
            thumbnail: data.thumbnail,
            title: data.title,
          };
          return gameDetails;
        })
      )
      .subscribe((gameData: GameDetails) => {
        this.game = gameData;
        if (this.game.minimum_system_requirements) {
          this.MinrequirementsArray = Object.entries(
            this.game.minimum_system_requirements
          );
        }
        if (this.game.screenshots) {
          this.ScreenShots = Object.entries(this.game.screenshots);
        }
      });
  }
}
