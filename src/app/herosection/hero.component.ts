import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl:'hero.component.html',
    styleUrls: [
        'hero.scss'
    ]

})
export class HeroComponent {
    greeting: string = 'Hello from Angular Full Stack' 

    getGeeting(name: string)  {
        return 'React v/s Angular Debate '+ name
    }

    getTimeStamp() {
        return new Date()
    }
}