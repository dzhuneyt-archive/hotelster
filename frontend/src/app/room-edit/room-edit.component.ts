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

  public room: RoomInterface;

  public roomTypes: RoomTypeInterface[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomEditComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend.request('api/rooms/' + this.data.id).subscribe((room: RoomInterface) => {
      this.room = room;
    });

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
    this.backend.request('api/rooms/' + this.data.id, 'PUT', payload).subscribe(result => {
      console.log(result);
      this.dialogSelfRef.close(true);
    });
  }

}
