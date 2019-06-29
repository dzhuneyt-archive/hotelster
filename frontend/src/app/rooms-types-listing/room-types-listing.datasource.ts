import {Injectable} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BackendService} from 'src/app/backend.service';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, Observer} from 'rxjs';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';

@Injectable()
export class RoomTypesListingDatasource extends DataSource<any> {

  constructor(private backend: BackendService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    return Observable.create((observer: Observer<RoomTypeInterface[]>) => {
      this.backend.request('api/room_types', 'GET').subscribe((rooms: RoomTypeInterface[]) => {
        observer.next(rooms);
        observer.complete();
      });
    });
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
