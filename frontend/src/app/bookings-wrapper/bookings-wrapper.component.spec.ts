import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingsWrapperComponent} from './bookings-wrapper.component';

describe('BookingsWrapperComponent', () => {
  let component: BookingsWrapperComponent;
  let fixture: ComponentFixture<BookingsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsWrapperComponent]
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
