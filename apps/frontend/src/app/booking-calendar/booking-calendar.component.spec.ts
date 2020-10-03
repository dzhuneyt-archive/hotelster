import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingCalendarComponent} from './booking-calendar.component';
import {CalendarHeaderComponent} from "src/app/calendar-header/calendar-header.component";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BackendService} from "src/app/backend.service";

describe('BookingCalendarComponent', () => {
  let component: BookingCalendarComponent;
  let fixture: ComponentFixture<BookingCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingCalendarComponent,
        CalendarHeaderComponent,
      ],
      providers: [
        BackendService,
      ],
      imports: [
        HttpClientTestingModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
