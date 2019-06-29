import {Component, OnInit} from '@angular/core';
import {TableAction, TableColumn} from 'src/app/table/table.component';
import {RoomListDataSource} from 'src/app/rooms-listing/rooms-listing.datasource';
import {RoomInterface} from 'src/interfaces/room.interface';
import {TitleService} from 'src/app/title.service';


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
      onClick: (row) => {
        console.log('editing');
        console.log(row);
      },
      icon: 'edit'
    },
    {
      code: 'delete',
      label: 'Delete',
      onClick: (row) => {
        console.log('deleting');
        console.log(row);
      },
      icon: 'delete'
    }
  ];

  constructor(
    public dataSource: RoomListDataSource,
    public title: TitleService,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Rooms management');
  }

}
