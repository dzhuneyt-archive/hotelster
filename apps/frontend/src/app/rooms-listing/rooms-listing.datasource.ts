import {Injectable} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BackendService} from 'src/app/backend.service';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, Observer} from 'rxjs';
import {RoomInterface} from 'src/interfaces/room.interface';
import {map} from "rxjs/operators";

@Injectable()
export class RoomListDataSource extends DataSource<any> {

  constructor(private backend: BackendService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    return Observable.create((observer: Observer<RoomInterface[]>) => {
      this.backend
        .request('api/rooms', 'GET')
        .pipe(map(res => res.data))
        .subscribe((rooms: RoomInterface[]) => {
          observer.next(rooms);
          observer.complete();
        });
    });
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
