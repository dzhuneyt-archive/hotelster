import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomsListingComponent} from './rooms-listing.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RoomsListingComponent', () => {
  let component: RoomsListingComponent;
  let fixture: ComponentFixture<RoomsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListingComponent],
      providers: [
        BackendService,
      ],
      imports: [
        HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
