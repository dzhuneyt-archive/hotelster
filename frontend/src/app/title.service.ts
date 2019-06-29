import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  public siteTitle = 'Booking';

  // Allow multiple places of the app to subscribe to this single source of truth for title
  public titleChanges = new BehaviorSubject(this.siteTitle);

  constructor(private title: Title) {
  }

  setTitle(newTitle: string) {
    // Update the <title> tag
    this.title.setTitle(this.siteTitle + ' - ' + newTitle);

    // Notify different parts of the UI that the title of the page changed
    this.titleChanges.next(newTitle);
  }
}
