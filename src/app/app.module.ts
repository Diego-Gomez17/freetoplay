import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardGameComponent } from './pages/card-game/card-game.component';
import { TitleFilterPipe } from './pipes/title-filter.pipe';
import { GenderFilterPipe } from './pipes/gender-filter.pipe';
import { PlatformFilterPipe } from './pipes/platform-filter.pipe';
import { GameDetailsComponent } from './pages/game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGameComponent,
    GameDetailsComponent,
    TitleFilterPipe,
    GenderFilterPipe,
    PlatformFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
