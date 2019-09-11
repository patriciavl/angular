import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!';
  constructor() {
    setTimeout(
      () => {
        this.title = '';
      },
    1000);
  }
  getResult(event){
    console.log(event);
  }
}
