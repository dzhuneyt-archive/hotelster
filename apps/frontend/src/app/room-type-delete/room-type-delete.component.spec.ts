import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypeDeleteComponent} from './room-type-delete.component';
import {MatDialogModule} from "@angular/material";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('RoomTypeDeleteComponent', () => {
  let component: RoomTypeDeleteComponent;
  let fixture: ComponentFixture<RoomTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeDeleteComponent],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      imports: [
        MatDialogModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
