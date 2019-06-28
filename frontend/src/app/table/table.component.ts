import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk/table";

export interface TableColumn {
  code: string;
  header: string;
  renderer?: (row: any) => any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() data: DataSource<any>;
  @Input() columns: TableColumn[];

  displayedColumns = [];

  get columnsToShow() {
    if (this.displayedColumns.length > 0) {
      return this.displayedColumns;
    }
    return this.columns.map((item: TableColumn) => item.code);
  }

  renderColumns(row, index) {
    if (this.columns[index].hasOwnProperty('renderer')) {
      return this.columns[index].renderer(row);
    } else {
      return row[this.columns[index].code];
    }
  }

}
