import {Component, OnInit} from '@angular/core';
import {from, Observable, Observer, of} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {CollectionViewer} from "@angular/cdk/collections";
import {TableColumn} from "src/app/table/table.component";

class RoomListDataSource extends DataSource<any> {
  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    return of([
      {
        userName: 'john',
        progress: '30%',
        userId: 'userid here'
      }
    ]);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}

@Component({
  selector: 'app-rooms-listing',
  templateUrl: './rooms-listing.component.html',
  styleUrls: ['./rooms-listing.component.scss']
})
export class RoomsListingComponent implements OnInit {

  public dataSource: DataSource<any>;
  public columns: TableColumn[] = [
    {code: 'userId', header: 'ID'},
    {
      code: 'userName', header: 'Name', renderer: (row: any) => {
        return row['userName'];
      }
    },
    {code: 'progress', header: 'Progress', renderer: (row: any) => `${row['progress']}`},
  ];

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new RoomListDataSource();
  }

}
