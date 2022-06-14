import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancelogComponent } from './balancelog/balancelog.component';
const routes: Routes = [
  {
    path: '', component: BalancelogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalancelogRoutingModule { }
