import {Component} from '@angular/core';
import {TableColumn} from 'src/app/table/table.component';
import {RoomListDataSource} from 'src/app/rooms-listing/room-listing.datasource';
import {RoomInterface} from 'src/interfaces/room.interface';


@Component({
  selector: 'app-rooms-listing',
  templateUrl: './rooms-listing.component.html',
  styleUrls: ['./rooms-listing.component.scss'],
  providers: [
    RoomListDataSource,
  ]
})
export class RoomsListingComponent {

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
  ];

  constructor(
    public dataSource: RoomListDataSource,
  ) {
  }

}
