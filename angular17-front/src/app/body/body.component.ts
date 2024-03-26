import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list"
import { MatIcon } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// Components
import { DashComponent } from '../dash/dash.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MatSidenavModule
    , MatButtonModule
    , FormsModule
    , ReactiveFormsModule
    , MatListModule
    , MatIcon
    , MatGridListModule
    , MatTableModule
    , MatTabsModule
    , MatSlideToggleModule
    , DashComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  tiles: string[] = ['View All', 'Open', 'Processing', 'Finalized'];

  sidenavOpened = true;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }


}


