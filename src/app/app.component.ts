import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '* HACKER ACADEMY *';
  enabled = false;

  // metodo de ts
  changeTitleBackgroudColor(): object {
    return {
      backgroundColor: this.enabled === true ? 'grey' : 'cyan',
    }
  }
}
