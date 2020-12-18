import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Atin\'s Demo Class';
  normalStyle = "p-4 bg-primary text-gray-200"
  highStyle = "p-4 bg-warning text-gray"

  hightlight:boolean = true;

  getStyle() {
    return this.hightlight;
  }
  toggle() {
    this.hightlight = !this.hightlight;
  }


}
