import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomDeleteComponent} from './room-delete.component';
import {MatDialogModule} from "@angular/material";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RoomDeleteComponent', () => {
  let component: RoomDeleteComponent;
  let fixture: ComponentFixture<RoomDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomDeleteComponent],
      providers: [
        BackendService,
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
