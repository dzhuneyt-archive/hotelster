import {Injectable} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BackendService} from 'src/app/backend.service';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, Observer} from 'rxjs';
import {map} from "rxjs/operators";
import {BookingInterface} from "src/interfaces/booking.interface";

@Injectable()
export class BookingsListingDatasource extends DataSource<any> {

  constructor(private backend: BackendService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    return Observable.create((observer: Observer<BookingInterface[]>) => {
      this.backend.request('api/bookings', 'GET').pipe(map(
        res => res.data
      )).subscribe((rooms: BookingInterface[]) => {
        observer.next(rooms);
        observer.complete();
      });
    });
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
