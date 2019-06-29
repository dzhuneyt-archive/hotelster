import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {RoomsListingComponent} from './rooms-listing/rooms-listing.component';
import {RoomTypesListingComponent} from './rooms-types-listing/room-types-listing.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
