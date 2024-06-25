import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    LoginComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
