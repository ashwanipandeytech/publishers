import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BalancelogComponent } from './balancelog/balancelog.component';
import { BalancelogRoutingModule } from './balancelog-routing.module';


@NgModule({
  declarations: [
    BalancelogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BalancelogRoutingModule
  ]
})
export class BalancelogModule { }
