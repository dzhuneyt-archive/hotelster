import {Component, Inject, OnInit, Optional} from '@angular/core';
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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() private dialogSelfRef: MatDialogRef<RoomDeleteComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.backend.request('api/rooms/' + this.data.id).subscribe((room: RoomInterface) => {
        this.room = room;
      });
    }
  }

  confirmDelete() {
    this.backend.request('api/rooms/' + this.data.id, 'DELETE').subscribe(() => {
      this.dialogSelfRef.close(true);
    });
  }

}
