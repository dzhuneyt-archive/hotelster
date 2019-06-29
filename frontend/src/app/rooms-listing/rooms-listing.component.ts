import {Component, Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {TableColumn} from 'src/app/table/table.component';
import {BackendService} from 'src/app/backend.service';

interface RoomInterface {
  id: number;
  name: string;
  room_image_url: string;
}

@Injectable()
class RoomListDataSource extends DataSource<any> {

  constructor(private backend: BackendService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    console.log('connect');

    collectionViewer.viewChange.subscribe(res => {
      // console.log('viewChange', res);
    });

    return Observable.create((observer: Observer<RoomInterface[]>) => {
      this.backend.request('api/rooms', 'GET').subscribe((rooms: RoomInterface[]) => {
        console.log(rooms);
        observer.next(rooms);
        observer.complete();
      });
    });
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}

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
