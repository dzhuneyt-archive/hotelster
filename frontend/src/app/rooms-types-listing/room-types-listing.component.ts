import {Component, OnInit} from '@angular/core';
import {TitleService} from '../title.service';
import {TableAction, TableColumn} from '../table/table.component';
import {RoomTypesListingDatasource} from './room-types-listing.datasource';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';
import {MatDialog} from '@angular/material';
import {RoomTypeEditComponent} from 'src/app/room-type-edit/room-type-edit.component';
import {RoomTypeDeleteComponent} from 'src/app/room-type-delete/room-type-delete.component';

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
      onClick: (row: RoomTypeInterface) => {
        this.dialogService.open(RoomTypeEditComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          window.location.reload();
        });
      },
      icon: 'edit'
    },
    {
      code: 'delete',
      label: 'Delete',
      onClick: (row: RoomTypeInterface) => {
        this.dialogService.open(RoomTypeDeleteComponent, {
          data: {
            id: row.id
          }
        }).afterClosed().subscribe(res => {
          window.location.reload();
        });
      },
      icon: 'delete'
    }
  ];

  constructor(
    public title: TitleService,
    public dataSource: RoomTypesListingDatasource,
    private dialogService: MatDialog,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Room types management');
  }

}
