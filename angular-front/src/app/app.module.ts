import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';


// Import the ChartsModule from ng2-charts
// import { ChartsModule } from 'ng2-charts';

// @NgModule({
//   imports: [
//    …
//    ChartsModule,
//    …
// ]
// })

@NgModule({
  declarations: [
    AppComponent
    , HeaderComponent, BodyComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , MatIconModule
    , MatToolbarModule
  , MatSidenavModule
  , MatButtonModule
  , FormsModule
  , ReactiveFormsModule
  , MatListModule
  , MatGridListModule
  , MatTableModule
  , MatTabsModule
  , MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
