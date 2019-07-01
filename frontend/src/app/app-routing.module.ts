import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {RoomsListingComponent} from './rooms-listing/rooms-listing.component';
import {RoomTypesListingComponent} from './rooms-types-listing/room-types-listing.component';
import {BookingsWrapperComponent} from 'src/app/bookings-wrapper/bookings-wrapper.component';

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
    component: BookingsWrapperComponent,
  },
  {
    path: '**',
    redirectTo: 'bookings',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
