import { Component, OnInit } from '@angular/core';
// Service
import { SidenavService } from '../service/sidenav.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public tiles: string[] = ['View All'].concat(['Open', 'Processing', 'Finalized']);
  sidenavOpened = true;
  isChecked: boolean = false;
  dateFormat: string = 'en-CA'

  constructor(private sidenavService: SidenavService
    , private dataService: DataService) {}

  ngOnInit(): void {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.sidenavOpened = !this.sidenavOpened;
    });
  }

  onToggleChange() {
    this.sidenavService.toggleFormat();
  }

}
