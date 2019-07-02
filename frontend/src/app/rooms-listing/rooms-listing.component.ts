import {Component, OnInit, Optional} from '@angular/core';
import {TableAction, TableColumn} from 'src/app/table/table.component';
import {RoomListDataSource} from 'src/app/rooms-listing/rooms-listing.datasource';
import {RoomInterface} from 'src/interfaces/room.interface';
import {TitleService} from 'src/app/title.service';
import {MatDialog} from '@angular/material';
import {RoomEditComponent} from 'src/app/room-edit/room-edit.component';
import {RoomDeleteComponent} from 'src/app/room-delete/room-delete.component';


@Component({
  selector: 'app-rooms-listing',
  templateUrl: './rooms-listing.component.html',
  styleUrls: ['./rooms-listing.component.scss'],
  providers: [
    RoomListDataSource,
  ]
})
export class RoomsListingComponent implements OnInit {

  public columns: TableColumn[] = [
    {
      code: 'image',
      header: 'Room Image',
      renderer: (room: RoomInterface) => {
        if (!room.room_image_url) return;
        return `<img src="` + room.room_image_url + `"/>`;
      },
      raw: true,
    },
    {
      code: 'name', header: 'Name'
    },
    {
      code: 'room_type', header: 'Room Type', renderer: (row: RoomInterface) => {
        return row.room_type.name;
      }
    },
  ];

  public tableActions: TableAction[] = [
    {
      code: 'edit',
      label: 'Edit',
      onClick: (row: RoomInterface) => {
        this.dialogService.open(RoomEditComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            window.location.reload();
          }
        });
      },
      icon: 'edit'
    },
    {
      code: 'delete',
      label: 'Delete',
      onClick: (row) => {
        this.dialogService.open(RoomDeleteComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            window.location.reload();
          }
        });
      },
      icon: 'delete'
    }
  ];

  constructor(
    public dataSource: RoomListDataSource,
    public title: TitleService,
    @Optional() private dialogService: MatDialog,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Rooms management');
  }

  createNew() {
    this.dialogService.open(RoomEditComponent, {
      data: {
        id: null
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        window.location.reload();
      }
    });
  }

}
