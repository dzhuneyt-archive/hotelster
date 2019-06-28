import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomsTypesListingComponent} from './rooms-types-listing.component';

describe('RoomsTypesListingComponent', () => {
  let component: RoomsTypesListingComponent;
  let fixture: ComponentFixture<RoomsTypesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsTypesListingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTypesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
