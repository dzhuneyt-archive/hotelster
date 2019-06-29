import {Component, Input} from '@angular/core';
import {DataSource} from '@angular/cdk/table';

export interface TableColumn {
  code: string;
  header: string;

  // A custom lambda function that will handle the rendering of this cell
  renderer?: (row: any) => any;

  // Whether or not the cell will render HTML tags that need to be parsed
  // Causes Angular to strip HTML sanitization so make sure user input is filtered for columns that use this flag
  raw?: boolean;
}

export interface TableAction {
  code: string;
  label: string;
  onClick: (row: any) => any;
  icon?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() actions: TableAction[] = [];
  @Input() data: DataSource<any>;
  @Input() columns: TableColumn[] = [];

  get columnsToShow() {
    if (!this.columns) {
      return [];
    }

    const columns = this.columns.map((item: TableColumn) => item.code);

    // If there are any actions provided, push a "virtual" actions column to the columns definitions
    if (this.actions !== null && this.actions.length > 0) {
      columns.push('actions');
    }
    return columns;
  }

  renderColumns(row, index) {
    if (this.columns[index].hasOwnProperty('renderer')) {
      return this.columns[index].renderer(row);
    } else {
      return row[this.columns[index].code];
    }
  }

}
