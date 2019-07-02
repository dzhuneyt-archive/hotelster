import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HotelDetailsComponent} from './hotel-details.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule, MatInputModule, MatSnackBarModule} from "@angular/material";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CommonModule} from "@angular/common";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelDetailsComponent],
      providers: [
        BackendService,
      ],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
