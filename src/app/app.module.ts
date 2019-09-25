import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {holamundo}  from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component'

@NgModule({
  declarations: [
    AppComponent,
    holamundo,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
