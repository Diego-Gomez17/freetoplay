import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCardGame } from '../../services/get-free-game/get-free-game.service';

@Component({
  selector: 'game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  game : any = {};
  MinrequirementsArray!: any[];
  ScreenShots: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private GetCardGame: GetCardGame) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
      const gameId = params['id'];
      this.getDetailsGame(gameId);
    });
  }
  getDetailsGame(id: number) {
    this.GetCardGame.getDataById(id).subscribe(
      data => {
        this.game = data;
        if (this.game.minimum_system_requirements){
          this.MinrequirementsArray = Object.entries(this.game.minimum_system_requirements);
        }
        if (this.game.screenshots){
          this.ScreenShots = Object.entries(this.game.screenshots);
        }
        console.log(this.game);
      }
    );
  }
}
