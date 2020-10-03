import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomEditComponent} from './room-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialComponentsModuleModule} from "src/app/material-components-module/material-components-module.module";
import {BackendService} from "src/app/backend.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('RoomEditComponent', () => {
  let component: RoomEditComponent;
  let fixture: ComponentFixture<RoomEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomEditComponent],
      providers: [
        BackendService,
      ],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialComponentsModuleModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
