import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonnaComponent } from './donna/donna.component';
import { DataServiceService } from '../services/data-service.service';



@NgModule({
  declarations: [
    DonnaComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DonnaComponent,
  ],
  providers: [
    DataServiceService
  ]
})
export class GraficasModule { }
