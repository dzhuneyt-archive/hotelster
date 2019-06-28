import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomsListingComponent} from './rooms-listing.component';

describe('RoomsListingComponent', () => {
  let component: RoomsListingComponent;
  let fixture: ComponentFixture<RoomsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListingComponent]
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
