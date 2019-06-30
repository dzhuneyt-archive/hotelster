import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingDeleteComponent} from './booking-delete.component';

describe('BookingDeleteComponent', () => {
  let component: BookingDeleteComponent;
  let fixture: ComponentFixture<BookingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingDeleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
