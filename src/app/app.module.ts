import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Componente/com1/com1.component';
import { Com2Component } from './Componente/com2/com2.component';
import { Com3Component } from './Componente/com3/com3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Com2Component,
    Com3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }