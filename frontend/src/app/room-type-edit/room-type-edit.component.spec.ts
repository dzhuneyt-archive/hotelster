import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypeEditComponent} from './room-type-edit.component';

describe('RoomTypeEditComponent', () => {
  let component: RoomTypeEditComponent;
  let fixture: ComponentFixture<RoomTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeEditComponent]
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
