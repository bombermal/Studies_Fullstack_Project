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
  public tiles: string[] = ['View All', 'Open', 'Processing', 'Finalized'];
  // public tiles: any[] = [];
  sidenavOpened = true;
  
  constructor(private sidenavService: SidenavService
    , private dataService: DataService) {}

  ngOnInit(): void {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.sidenavOpened = !this.sidenavOpened;
    });

    // this.dataService.getTiles().subscribe(
    //   (data: any[]) => {
    //     // this.tiles = data;
    //     // Print on console
    //     console.log('Data:', data);
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );

  }

}
