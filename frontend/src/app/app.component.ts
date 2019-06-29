import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TitleService} from 'src/app/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pageTitle;

  constructor(
    public title: TitleService,
    private ref: ChangeDetectorRef,
  ) {

  }

  ngOnInit() {
    this.title.titleChanges.subscribe(value => {
      this.pageTitle = value;
      this.ref.detectChanges();
    });
  }
}
