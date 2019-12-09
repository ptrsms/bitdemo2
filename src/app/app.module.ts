import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {JumbotronModule} from '@bit/ptrsms.eyes.jumbotron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from '@bit/ptrsms.eyes.toolbar';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JumbotronModule,
    ToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
