import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from '../backend.service';
import {RoomInterface} from 'src/interfaces/room.interface';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {

  public room: RoomInterface = {
    name: '',
    room_image_url: '',
    room_type: {
      name: '',
      daily_price: null,
    }
  };

  public roomTypes: RoomTypeInterface[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomEditComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    if (this.data.id) {
      this.backend.request('api/rooms/' + this.data.id).subscribe((room: RoomInterface) => {
        this.room = room;
      });
      // Edit
    } else {
      // Create new
    }

    this.backend
      .request('api/room_types')
      .pipe(map(res => res.data))
      .subscribe((roomTypes: RoomTypeInterface[]) => {
        this.roomTypes = roomTypes;
      });
  }

  public save() {
    const payload: any = {...this.room};
    // Make API happy
    payload.room_type_id = this.room.room_type.id;
    delete payload.room_type;
    delete payload.hotel;

    const url = this.data.id ? 'api/rooms/' + this.data.id : 'api/rooms';
    const method = this.data.id ? 'PUT' : 'POST';
    this.backend.request(url, method, payload).subscribe(result => {
      console.log(result);
      this.dialogSelfRef.close(true);
    });
  }

}
