import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {BookingInterface} from 'src/interfaces/booking.interface';
import {map} from 'rxjs/operators';
import {RoomInterface} from 'src/interfaces/room.interface';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

  public booking: BookingInterface;
  public rooms: RoomInterface[] = [];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() private dialogSelfRef: MatDialogRef<BookingEditComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    if (this.data) {
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
  }

  public save() {
    const payload: any = {...this.booking};
    // Make API happy
    payload.room_id = this.booking.room.id;
    delete payload.room;
    delete payload.total_nights;
    delete payload.price;
    delete payload.is_past;
    this.backend.request('api/bookings/' + this.data.id, 'PUT', payload).subscribe(result => {
      console.log(result);
      this.dialogSelfRef.close(true);
    });
  }


}
