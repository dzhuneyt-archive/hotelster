import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {BackendService} from '../backend.service';
import {RoomInterface} from 'src/interfaces/room.interface';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    room_type_id: new FormControl('', [Validators.required]),
    room_image_url: new FormControl('', [Validators.required]),
  });
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
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    if (this.data.id) {
      this.backend.request('api/rooms/' + this.data.id).subscribe((room: RoomInterface) => {
        this.room = room;

        this.form.controls['name'].setValue(room.name);
        this.form.controls['room_type_id'].setValue(room.room_type.id);
        this.form.controls['room_image_url'].setValue(room.room_image_url);
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

  isNewRecord(): boolean {
    return !this.data.id;
  }

  public save() {
    const payload: any = {...this.form.getRawValue()};
    const url = !this.isNewRecord() ? 'api/rooms/' + this.data.id : 'api/rooms';
    const method = !this.isNewRecord() ? 'PUT' : 'POST';

    if (this.isNewRecord()) {
      payload.hotel_id = 1;
    }

    this.backend.request(url, method, payload).subscribe(result => {
      console.log(JSON.stringify(result));
      this.dialogSelfRef.close(true);
    }, (error: any) => {
      for (let key in error) {
        let value = error[key];
        this._snackBar.open(value, null, {
          duration: 2000,
          panelClass: 'error'
        });
      }
    })
  }

}
