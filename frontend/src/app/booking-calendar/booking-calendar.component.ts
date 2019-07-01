import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import {map} from 'rxjs/operators';
import {CalendarEvent} from 'angular-calendar';
import {TitleService} from "src/app/title.service";
import {BackendService} from "src/app/backend.service";
import {BookingInterface} from "src/interfaces/booking.interface";

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

function formatEventTitle(booking: BookingInterface) {
  return `${booking.room.name} booked by ${booking.customer_fullname} for ${booking.total_nights} nights - ` + booking.start + ' - ' + booking.end;
}


@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit {

  view = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ film: any }>>>;

  activeDayIsOpen = false;

  constructor(private http: HttpClient,
              private title: TitleService,
              private backend: BackendService,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Booking management calendar');
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'from_date',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'to_date',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      );

    this.events$ = this.backend
      .request('api/bookings', 'GET', {}, params)
      .pipe(
        map(res => res.data),
        map(results => {
          return results.map((booking: BookingInterface) => {
            return {
              title: formatEventTitle(booking),
              start: new Date(
                booking.start + getTimezoneOffsetString(this.viewDate)
              ),
              end: new Date(
                booking.end + getTimezoneOffsetString(this.viewDate)
              ),
              color: colors.yellow,
              allDay: true,
              meta: {
                film: booking
              }
            };
          });
        })
      );
  }

  dayClicked({
               date,
               events
             }: {
    date: Date;
    events: Array<CalendarEvent<{ film: any }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ event: any }>): void {

  }

}
