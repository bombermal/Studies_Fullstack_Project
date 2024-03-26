import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public tiles: string[] = ['View All', 'Open', 'Processing', 'Finalized'];
  public sidenavOpened = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
