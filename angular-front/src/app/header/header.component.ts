import { Component, OnInit } from '@angular/core';
// Service
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private SidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.SidenavService.toggleSidenav();
  }
}
