import { TestBed } from '@angular/core/testing';

import { GetCardGame } from './get-free-game.service';

describe('GetCardGame', () => {
  let service: GetCardGame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
