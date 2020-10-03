import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings-wrapper',
  templateUrl: './bookings-wrapper.component.html',
  styleUrls: ['./bookings-wrapper.component.scss']
})
export class BookingsWrapperComponent implements OnInit {

  public viewMode: 'list' | 'calendar' = 'list';

  constructor() {
  }

  ngOnInit() {
  }

  switch(viewMode) {
    this.viewMode = viewMode;
  }

}
