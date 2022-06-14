import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TopupRoutingModule } from './topup-routing.module';
import { TopupComponent } from './topup.component';


@NgModule({
  declarations: [
    TopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TopupRoutingModule
  ]
})
export class TopupModule { }
