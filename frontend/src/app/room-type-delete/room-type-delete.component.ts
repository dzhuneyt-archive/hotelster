import {Component, Inject, OnInit} from '@angular/core';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-room-type-delete',
  templateUrl: './room-type-delete.component.html',
  styleUrls: ['./room-type-delete.component.scss']
})
export class RoomTypeDeleteComponent implements OnInit {
  public roomType: RoomTypeInterface;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomTypeDeleteComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit(): void {
    this.backend
      .request('api/room_types/' + this.data.id)
      .pipe(map(res => res.data))
      .subscribe((roomType: RoomTypeInterface) => {
        this.roomType = roomType;
      });
  }

  confirmDelete() {
    this.backend
      .request('api/room_types/' + this.data.id, 'DELETE')
      .subscribe((roomType: RoomTypeInterface) => {
        this.dialogSelfRef.close(true);
      });
  }
}
