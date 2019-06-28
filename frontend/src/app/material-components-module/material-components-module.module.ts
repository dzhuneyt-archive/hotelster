import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

const MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
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
