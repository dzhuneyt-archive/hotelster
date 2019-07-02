import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {BookingInterface} from 'src/interfaces/booking.interface';

@Component({
  selector: 'app-booking-delete',
  templateUrl: './booking-delete.component.html',
  styleUrls: ['./booking-delete.component.scss']
})
export class BookingDeleteComponent implements OnInit {
  public booking: BookingInterface;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<BookingDeleteComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend.request('api/bookings/' + this.data.id).subscribe((booking: BookingInterface) => {
      this.booking = booking;
    });
  }

  confirmDelete() {
    this.backend.request('api/bookings/' + this.data.id, 'DELETE').subscribe(res => {
      if (res) {
        this.dialogSelfRef.close(true);
      }
    });
  }

}
