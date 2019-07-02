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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {MatDialogModule, MatSnackBarModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {RoomEditComponent} from './room-edit/room-edit.component';
import {RoomDeleteComponent} from './room-delete/room-delete.component';
import {RoomTypeDeleteComponent} from './room-type-delete/room-type-delete.component';
import {RoomTypeEditComponent} from './room-type-edit/room-type-edit.component';
import {BookingEditComponent} from './booking-edit/booking-edit.component';
import {BookingDeleteComponent} from './booking-delete/booking-delete.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BookingCalendarComponent} from './booking-calendar/booking-calendar.component';
import {CalendarHeaderComponent} from './calendar-header/calendar-header.component';
import {BookingsWrapperComponent} from './bookings-wrapper/bookings-wrapper.component';

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
    BookingDeleteComponent,
    BookingCalendarComponent,
    CalendarHeaderComponent,
    BookingsWrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModuleModule,
    MatTableModule,
    CdkTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
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
