import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypeDeleteComponent} from './room-type-delete.component';

describe('RoomTypeDeleteComponent', () => {
  let component: RoomTypeDeleteComponent;
  let fixture: ComponentFixture<RoomTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeDeleteComponent]
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
