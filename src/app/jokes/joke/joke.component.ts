import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-joke',
    templateUrl: 'joke.component.html',
    styleUrls: ['joke.component.scss']
})
export class JokeComponent {

    @Input()
    data:{picUrl:string,author: string,joke:string,btnText:string } ={
    author:'',
    picUrl:'',
    joke:'',
    btnText:''
    };

    @Output()
    authorName = new EventEmitter<string>();

    onBtnClick() {
        console.log(this.data.author)
        this.authorName.emit(this.data.author);
    }

}