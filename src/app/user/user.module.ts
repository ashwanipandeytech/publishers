import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
