import {Component, OnInit} from '@angular/core';
import {TableColumn} from 'src/app/table/table.component';
import {TitleService} from 'src/app/title.service';
import {BookingsListingDatasource} from 'src/app/bookings-listing/bookings-listing.datasource';
import {BookingInterface} from 'src/interfaces/booking.interface';

@Component({
  selector: 'app-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss'],
  providers: [
    BookingsListingDatasource
  ],
})
export class BookingsListingComponent implements OnInit {

  public columns: TableColumn[] = [
    {
      code: 'start', header: 'Check in date'
    },
    {
      code: 'end', header: 'Check out date'
    },
    {
      code: 'room', header: 'Room', renderer: (row: BookingInterface) => {
        return row.room.name;
      }
    },
    {
      code: 'customer_fullname', header: 'Customer name'
    },
    {
      code: 'customer_email', header: 'Customer email'
    },
    {
      code: 'price', header: 'Price', renderer: (row: BookingInterface) => {
        return '$' + row.price + ' for ' + row.total_nights + ' nights';
      }
    },
  ];

  constructor(
    public title: TitleService,
    public dataSource: BookingsListingDatasource,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Manage bookings');
  }

}
