import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from '../backend.service';
import {RoomInterface} from 'src/interfaces/room.interface';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {

  public room: RoomInterface;

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
  }

  public save() {
    const payload = {...this.room};
    // Make API happy
    delete payload.room_type;
    delete payload.hotel;
    this.backend.request('api/rooms/' + this.data.id, 'PUT', payload).subscribe(result => {
      console.log(result);
      this.dialogSelfRef.close(true);
    });
  }

}
