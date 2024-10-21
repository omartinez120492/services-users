import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './users/components/add/add.component';

import { ShowuserComponent } from './users/components/showuser/showuser.component';
import { ShowallComponent } from './users/components/showall/showall.component';
import { ApiUndefinedComponent } from './api-undefined/api-undefined.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddComponent,
    ShowuserComponent,
    ShowallComponent,
    ApiUndefinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
