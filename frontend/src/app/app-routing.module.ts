import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {RoomsListingComponent} from './rooms-listing/rooms-listing.component';
import {RoomTypesListingComponent} from './rooms-types-listing/room-types-listing.component';
import {BookingsListingComponent} from "src/app/bookings-listing/bookings-listing.component";

const routes: Routes = [
  {
    path: 'hotel-details',
    component: HotelDetailsComponent,
  },
  {
    path: 'room-listing',
    component: RoomsListingComponent,
  },
  {
    path: 'room-types-listing',
    component: RoomTypesListingComponent,
  },
  {
    path: 'bookings',
    component: BookingsListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
