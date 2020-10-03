import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CdkTableModule} from "@angular/cdk/table";

const MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  CdkTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
  ],
})
export class MaterialComponentsModuleModule {
}
