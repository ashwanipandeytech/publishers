import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallentriesComponent } from './callentries.component';
const routes: Routes = [
  {
    path: '', component: CallentriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallentriesRoutingModule { }
