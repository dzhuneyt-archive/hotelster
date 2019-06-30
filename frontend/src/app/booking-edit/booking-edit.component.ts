import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {BookingInterface} from 'src/interfaces/booking.interface';
import {map} from 'rxjs/operators';
import {RoomInterface} from "src/interfaces/room.interface";

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

  public booking: BookingInterface;
  public rooms: RoomInterface[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<BookingEditComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend
      .request('api/bookings/' + this.data.id)
      .pipe(map(res => res.data))
      .subscribe((booking: BookingInterface) => {
        this.booking = booking;
      });

    this.backend
      .request('api/rooms')
      // .pipe(map(res => res.data))
      .subscribe((rooms: RoomInterface[]) => {
        this.rooms = rooms;
      });
  }

  public save() {
    const payload = {...this.booking};
    // Make API happy
    this.backend.request('api/bookings/' + this.data.id, 'PUT', payload).subscribe(result => {
      console.log(result);
      this.dialogSelfRef.close(true);
    });
  }


}
