import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Change dinchakakakak';
    // }, 2000);
  }
}
