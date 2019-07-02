import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypesListingComponent} from 'src/app/rooms-types-listing/room-types-listing.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MaterialComponentsModuleModule} from "src/app/material-components-module/material-components-module.module";

describe('RoomTypesListingComponent', () => {
  let component: RoomTypesListingComponent;
  let fixture: ComponentFixture<RoomTypesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypesListingComponent],
      providers: [
        BackendService,
      ],
      imports: [
        HttpClientTestingModule,
        MaterialComponentsModuleModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
