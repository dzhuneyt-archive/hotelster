import {Component, OnInit} from '@angular/core';
import {TitleService} from '../title.service';
import {TableAction, TableColumn} from '../table/table.component';
import {RoomTypesListingDatasource} from './room-types-listing.datasource';
import {RoomTypeInterface} from "src/interfaces/room-type.interface";

@Component({
  selector: 'app-rooms-types-listing',
  templateUrl: './room-types-listing.component.html',
  styleUrls: ['./room-types-listing.component.scss'],
  providers: [
    RoomTypesListingDatasource
  ]
})
export class RoomTypesListingComponent implements OnInit {

  public columns: TableColumn[] = [
    {
      code: 'name', header: 'Name'
    },
    {
      code: 'daily_price', header: 'Price per night', renderer: (row: RoomTypeInterface) => '$' + row.daily_price
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
    public title: TitleService,
    public dataSource: RoomTypesListingDatasource,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Room types management');
  }

}
