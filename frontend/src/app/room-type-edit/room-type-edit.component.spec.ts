import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypeEditComponent} from './room-type-edit.component';
import {FormsModule} from "@angular/forms";
import {MaterialComponentsModuleModule} from "src/app/material-components-module/material-components-module.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('RoomTypeEditComponent', () => {
  let component: RoomTypeEditComponent;
  let fixture: ComponentFixture<RoomTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeEditComponent],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        MaterialComponentsModuleModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
