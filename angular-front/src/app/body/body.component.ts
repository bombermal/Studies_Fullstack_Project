import { Component, OnInit } from '@angular/core';
// Service
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public tiles: string[] = ['View All', 'Open', 'Processing', 'Finalized'];
  sidenavOpened = false;
  
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.sidenavOpened = !this.sidenavOpened;
    });
  }

}
