import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './herosection/hero.component';
import { JokeModules } from './jokes/jokes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokeModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
