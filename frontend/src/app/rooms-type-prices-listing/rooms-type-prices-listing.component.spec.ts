import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomsTypePricesListingComponent} from './rooms-type-prices-listing.component';

describe('RoomsTypePricesListingComponent', () => {
  let component: RoomsTypePricesListingComponent;
  let fixture: ComponentFixture<RoomsTypePricesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsTypePricesListingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTypePricesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
