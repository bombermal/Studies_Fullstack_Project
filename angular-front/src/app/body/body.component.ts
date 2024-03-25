import {AfterViewInit, Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list"
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MatSidenavModule
    , MatButtonModule
    , FormsModule
    , ReactiveFormsModule
    , MatListModule
    , MatIcon],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  sidenavOpened = true;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
