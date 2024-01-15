import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas/tablas.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablasComponent
  ],
  exports: [
    TablasComponent
  ]
})
export class CoreModule { }
