import {Component} from '@angular/core';
import {TitleService} from 'src/app/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public title: TitleService) {

  }
}
