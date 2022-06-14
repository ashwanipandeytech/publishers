import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopupComponent } from './topup.component';
const routes: Routes = [
  {
    path: '', component: TopupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopupRoutingModule { }
