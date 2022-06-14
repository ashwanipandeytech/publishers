import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallentriesRoutingModule } from './callentries-routing.module';
import { CallentriesComponent } from './callentries.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    CallentriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CallentriesRoutingModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class CallentriesModule { }
