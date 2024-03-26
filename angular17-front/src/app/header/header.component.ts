import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule
    , MatIcon
    , MatButtonModule
  , MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}





