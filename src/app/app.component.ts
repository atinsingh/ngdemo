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


  master = [
    {
      picUrl: 'https://www.ntvtelugu.com/uploads/images/2019/06/image_big_464955cfe4cbeaf517.jpg',
      author: 'Ritesh',
      joke: 'IT make me dumb, I was smarter before smart phone',
      btnText: 'Know more about Ritesh'
   },
   {
    picUrl: 'https://m.media-amazon.com/images/M/MV5BZDQ1OGJjYmQtNWM2Yy00ZjU3LWE4YzktZTE0Y2ZlYjAzMzY1XkEyXkFqcGdeQXVyMjg3Njc5NTI@._V1_.jpg',
    author: 'Richa',
    joke: 'What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.',
    btnText: 'Know more about Richa'
 },
 {
  picUrl: 'https://www.crictracker.com/wp-content/uploads/2020/05/Rohit-Sharma-2.jpg',
  author: 'Rohit',
  joke: 'What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.',
  btnText: 'Know more about Rohit'
},
{
  picUrl: 'https://www.ntvtelugu.com/uploads/images/2019/06/image_big_464955cfe4cbeaf517.jpg',
  author: 'Ritesh',
  joke: 'IT make me dumb, I was smarter before smart phone',
  btnText: 'Know more about Ritesh'
}

  ]

  updateTitle(e:any){
    this.title = e;
  }

}
