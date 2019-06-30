import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentsModuleModule} from './material-components-module/material-components-module.module';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {RoomsListingComponent} from './rooms-listing/rooms-listing.component';
import {RoomTypesListingComponent} from 'src/app/rooms-types-listing/room-types-listing.component';
import {BookingsListingComponent} from './bookings-listing/bookings-listing.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {MatDialogModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {RoomEditComponent} from './room-edit/room-edit.component';
import {RoomDeleteComponent} from './room-delete/room-delete.component';
import {RoomTypeDeleteComponent} from './room-type-delete/room-type-delete.component';
import {RoomTypeEditComponent} from './room-type-edit/room-type-edit.component';
import {BookingEditComponent} from './booking-edit/booking-edit.component';
import {BookingDeleteComponent} from './booking-delete/booking-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailsComponent,
    RoomsListingComponent,
    RoomTypesListingComponent,
    BookingsListingComponent,
    TableComponent,
    RoomEditComponent,
    RoomDeleteComponent,
    RoomTypeDeleteComponent,
    RoomTypeEditComponent,
    BookingEditComponent,
    BookingDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModuleModule,
    MatTableModule,
    CdkTableModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    // Declare all components that will be used inside
    // dialogs here, because Angular will not generate a
    // ComponentFactory for them otherwise
    RoomEditComponent,
    RoomDeleteComponent,
    RoomTypeEditComponent,
    RoomTypeDeleteComponent,
    BookingEditComponent,
    BookingDeleteComponent,
  ],
})
export class AppModule {
}