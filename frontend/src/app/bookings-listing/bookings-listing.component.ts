import {Component, OnInit} from '@angular/core';
import {TableAction, TableColumn} from 'src/app/table/table.component';
import {TitleService} from 'src/app/title.service';
import {BookingsListingDatasource} from 'src/app/bookings-listing/bookings-listing.datasource';
import {BookingInterface} from 'src/interfaces/booking.interface';
import {MatDialog} from '@angular/material';
import {BookingEditComponent} from 'src/app/booking-edit/booking-edit.component';
import {BookingDeleteComponent} from 'src/app/booking-delete/booking-delete.component';

@Component({
  selector: 'app-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss'],
  providers: [
    BookingsListingDatasource
  ],
})
export class BookingsListingComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  // @TODO Allow viewing bookings in calendar mode (calendar should be filtered by month, year and display reserved dates with booking info by clicking on it)

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

  public tableActions: TableAction[] = [
    {
      code: 'edit',
      label: 'Edit',
      onClick: (row) => {
        this.dialogService.open(BookingEditComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            window.location.reload();
          }
        });
      },
      icon: 'edit'
    },
    {
      code: 'delete',
      label: 'Delete',
      onClick: (row) => {
        this.dialogService.open(BookingDeleteComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            window.location.reload();
          }
        });
      },
      icon: 'delete'
    }
  ];

  constructor(
    public title: TitleService,
    public dataSource: BookingsListingDatasource,
    private dialogService: MatDialog,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Manage bookings');
  }

}
