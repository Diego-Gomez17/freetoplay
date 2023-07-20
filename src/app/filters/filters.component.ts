import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GameService } from '../services/game.service';

@Component({
  selector: 'filters-games',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  searchName!: string;
  filterForm!: FormGroup;
  @Output() clearFilterEvent = new EventEmitter<void>();


  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService
  ) {}

  ngOnInit() {

    this.filterForm = this.formBuilder.group({
      name: [''],
      gender: [''],
      platform: [''],
    });
  }

  submitFilter() {
    const filters = this.filterForm.value;
    console.log(filters);

    this.gameService.filterGames(filters);

  }

  public clearForm() {
    this.filterForm.reset();
    this.clearFilterEvent.emit();
  }
}
