import { Component, OnInit, ViewChild   } from '@angular/core';
import { DataService } from '../services/get-free-game.service';
import { GameService } from '../services/game.service';
import { FiltersComponent } from '../filters/filters.component';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';





@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  games$!: Observable<any[]>;
  public gameService!: GameService;
  allGames: any[] = []; // Variable para almacenar todos los juegos sin filtrar
  @ViewChild(FiltersComponent) filtersComponent!: FiltersComponent; // Obtener una referencia al componente FiltersComponent


  constructor( gameService: GameService, private dataService: DataService) {
    this.gameService = gameService;
  }

  ngOnInit(): void {
    this.getDataGame();
    this.gameService.getGames().subscribe(games => {
      this.games$ = this.gameService.getGames();
    });
  }

  getDataGame(): void {
    this.dataService.getData().subscribe(
      response => {
        this.gameService.setGames(response);
        this.allGames=response
        //logs
        console.log(this.allGames)
        this.gameService.getGames().pipe(take(1)).subscribe(games => {
          console.log(games);
        })
      },
      error => {
        console.error(error);
      }
    );
  }
  clearFilter() {
    this.filtersComponent.clearForm(); // Llamar a la función clearForm() del componente FiltersComponent
  }
}
