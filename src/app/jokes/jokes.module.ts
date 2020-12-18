import { NgModule } from '@angular/core';
import { JokeComponent } from './joke/joke.component';
import { JokeItem } from './joke-item/jokeitem.component';

@NgModule({
    declarations:[
        JokeComponent,
        JokeItem
    ],
    exports: [
        JokeComponent
    ]
})
export class JokeModules {

}