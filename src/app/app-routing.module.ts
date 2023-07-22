import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { CardGameComponent } from './pages/card-game/card-game.component';

const routes: Routes = [
  { path: '', component: CardGameComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
