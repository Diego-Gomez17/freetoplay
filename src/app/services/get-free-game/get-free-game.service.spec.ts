import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetCardGame } from './get-free-game.service';

describe('GetCardGame', () => {
  let service: GetCardGame;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GetCardGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
