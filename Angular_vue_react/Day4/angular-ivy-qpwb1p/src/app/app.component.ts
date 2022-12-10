import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: string = 'true';

  array = [
    { ID: 90, Rating: 1 },
    { ID: 45, Rating: 2 },
    { ID: 65, Rating: 1 },
    { ID: 48, Rating: 3 },
  ];

  get showInfo() {
    if (this.show == 'true') {
      return true;
    } else {
      return false;
    }
  }
  name = 'Angular ' + VERSION.major;
}
