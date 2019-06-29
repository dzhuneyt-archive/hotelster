import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomTypesListingComponent} from 'src/app/rooms-types-listing/room-types-listing.component';

describe('RoomTypesListingComponent', () => {
  let component: RoomTypesListingComponent;
  let fixture: ComponentFixture<RoomTypesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypesListingComponent]
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
