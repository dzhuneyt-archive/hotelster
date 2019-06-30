import {Component, Inject, OnInit} from '@angular/core';
import {RoomInterface} from 'src/interfaces/room.interface';
import {BackendService} from 'src/app/backend.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.scss']
})
export class RoomDeleteComponent implements OnInit {

  public room: RoomInterface;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomDeleteComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend.request('api/rooms/' + this.data.id).subscribe((room: RoomInterface) => {
      this.room = room;
    });
  }

  confirmDelete() {
    this.backend.request('api/rooms/' + this.data.id, 'DELETE').subscribe(res => {
      this.dialogSelfRef.close(true);
    });
  }

}
