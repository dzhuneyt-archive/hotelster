import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingsWrapperComponent} from './bookings-wrapper.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {BookingCalendarComponent} from "src/app/booking-calendar/booking-calendar.component";
import {TableComponent} from "src/app/table/table.component";
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatDialogModule, MatTableModule} from "@angular/material";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";


@Component({
  selector: 'app-bookings-listing',
  template: '',
})
class BookingsListingComponent {

}

@Component({
  selector: 'mwl-demo-utils-calendar-header',
  template: '',
})
class CalendarHeaderComponent {

}

describe('BookingsWrapperComponent', () => {
  let component: BookingsWrapperComponent;
  let fixture: ComponentFixture<BookingsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingsWrapperComponent,
        BookingCalendarComponent, BookingsListingComponent, CalendarHeaderComponent,
        TableComponent
      ],
      providers: [
        BackendService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatTableModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
