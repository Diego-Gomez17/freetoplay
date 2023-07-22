import { Component, OnInit} from '@angular/core';
import { GameService } from '../../services/games/game.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'filters-games',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {

  public genres: string[] = [];
  public platforms: string[] = [];

  filterName="";
  filterGender="";
  filterPlatform="";


  constructor(private gameService: GameService) { }

  ngOnInit() {
  }


}
