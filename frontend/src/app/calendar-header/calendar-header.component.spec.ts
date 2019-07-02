import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarHeaderComponent} from './calendar-header.component';
import {NO_ERRORS_SCHEMA, Pipe} from "@angular/core";

@Pipe({
  name: 'mwlCalendarPreviousView'
})
class CalendarPreviousView {
  transform() {

  }
}

@Pipe({
  name: 'calendarDate'
})
class CalendarDatePipe {
  transform() {

  }
}

describe('CalendarHeaderComponent', () => {
  let component: CalendarHeaderComponent;
  let fixture: ComponentFixture<CalendarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarHeaderComponent,
        CalendarPreviousView,
        CalendarDatePipe
      ],
      imports: [
        // CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
