import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    NgxIntlTelInputModule
  ]
})
export class LoginModule { }
