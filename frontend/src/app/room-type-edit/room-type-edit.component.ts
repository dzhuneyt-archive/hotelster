import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.scss']
})
export class RoomTypeEditComponent implements OnInit {

  public roomType: RoomTypeInterface;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomTypeEditComponent>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend
      .request('api/room_types/' + this.data.id)
      .pipe(map(res => res.data))
      .subscribe((roomType: RoomTypeInterface) => {
        this.roomType = roomType;
      });
  }

  save() {
    const payload = {...this.roomType};
    // Make API happy
    // delete payload.hotel;
    this.backend
      .request('api/room_types/' + this.data.id, 'PUT', payload)
      .subscribe(result => {
        console.log(result);
        this.dialogSelfRef.close(true);
      });
  }

}
