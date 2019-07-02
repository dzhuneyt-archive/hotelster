import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {BackendService} from 'src/app/backend.service';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.scss']
})
export class RoomTypeEditComponent implements OnInit {

  public roomType: RoomTypeInterface = {
    name: null,
    daily_price: null
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSelfRef: MatDialogRef<RoomTypeEditComponent>,
    private backend: BackendService,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    if (!this.isNewRecord()) {
      this.backend
        .request('api/room_types/' + this.data.id)
        .pipe(map(res => res.data))
        .subscribe((roomType: RoomTypeInterface) => {
          this.roomType = roomType;
        });
    }
  }

  isNewRecord(): boolean {
    return !this.data.id;
  }

  save() {
    const payload = {...this.roomType};
    // Make API happy
    // delete payload.hotel;

    const url = this.isNewRecord() ? 'api/room_types' : 'api/room_types/' + this.data.id;
    this.backend
      .request(url, (this.isNewRecord() ? 'POST' : 'PUT'), payload)
      .subscribe(result => {
        console.log(result);
        this.dialogSelfRef.close(true);
      }, (error) => {
        for (let key in error) {
          let value = error[key];
          this._snackBar.open(value, null, {
            // duration: 2000,
            panelClass: 'error'
          });
          // Use `key` and `value`
        }
      });
  }

}
