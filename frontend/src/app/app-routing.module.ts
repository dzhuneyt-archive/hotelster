import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelDetailsComponent} from 'src/app/hotel-details/hotel-details.component';
import {RoomsListingComponent} from "src/app/rooms-listing/rooms-listing.component";
import {RoomTypesListingComponent} from "src/app/rooms-types-listing/room-types-listing.component";

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
