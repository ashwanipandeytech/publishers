import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'call-management'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
