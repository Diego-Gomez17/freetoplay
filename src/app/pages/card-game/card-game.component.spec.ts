import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CardGameComponent } from './card-game.component';

describe('CardGameComponent', () => {
  let component: CardGameComponent;
  let fixture: ComponentFixture<CardGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CardGameComponent],
    });
    fixture = TestBed.createComponent(CardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
