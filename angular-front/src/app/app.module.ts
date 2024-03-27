import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DashComponent } from './dash/dash.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
    , HeaderComponent, BodyComponent, DashComponent
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
  , MatCardModule
  , MatMenuModule
  , LayoutModule
  , CanvasJSAngularChartsModule
  , HttpClientModule
  ],
  providers: [], //provideCharts(withDefaultRegisterables())
  bootstrap: [AppComponent]
})
export class AppModule { }


