import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingEditComponent} from './booking-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule, MatFormFieldModule, MatSelectModule} from "@angular/material";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BookingEditComponent', () => {
  let component: BookingEditComponent;
  let fixture: ComponentFixture<BookingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingEditComponent],
      providers: [
        BackendService,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
