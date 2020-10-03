import {Component, Inject, OnInit, Optional} from '@angular/core';
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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() private dialogSelfRef: MatDialogRef<RoomTypeDeleteComponent>,
    @Optional() private backend: BackendService,
  ) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.backend
        .request('api/room_types/' + this.data.id)
        .pipe(map(res => res.data))
        .subscribe((roomType: RoomTypeInterface) => {
          this.roomType = roomType;
        });
    }
  }

  confirmDelete() {
    this.backend
      .request('api/room_types/' + this.data.id, 'DELETE')
      .subscribe(() => {
        this.dialogSelfRef.close(true);
      });
  }
}
