import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingsListingComponent} from './bookings-listing.component';
import {MatDialogModule, MatIconModule, MatTableModule} from "@angular/material";
import {TableComponent} from "src/app/table/table.component";
import {CdkTableModule} from "@angular/cdk/table";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BookingsListingComponent', () => {
  let component: BookingsListingComponent;
  let fixture: ComponentFixture<BookingsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingsListingComponent,
        TableComponent
      ],
      providers: [
        BackendService,
      ],
      imports: [
        MatTableModule,
        CdkTableModule,
        MatIconModule,
        HttpClientTestingModule,
        MatDialogModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
