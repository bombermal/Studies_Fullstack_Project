import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list"
import { MatIcon } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { BaseChartDirective } from 'ng2-charts';

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
    , BaseChartDirective
    , DashComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  tiles: string[] = ['View All', 'Credit', 'Debit'];

  sidenavOpened = true;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  displayedColumns: string[] = ['date', 'id', 'account_id', 'type', 'ammount', 'status'];
  dataSource = ELEMENT_DATA;
}

export interface InfoTransactions {
  id: number;
  account_id: number;
  type: string;
  status: string;
  date: string;
  ammount: number;
  
}

const ELEMENT_DATA: InfoTransactions[] = [
  {id: 1.0, account_id: 1.0, type: "Credit", date: "23/44/44", status: "Approved", ammount: 1.50}
  // , {id: 1.0, account_id: 1.0, type: "Credit", date: "23/44/44", status: "Approved", ammount: 1.50}
  // , {id: 1.0, account_id: 1.0, type: "Credit", date: "23/44/44", status: "Approved", ammount: 1.50}
  // , {id: 1.0, account_id: 1.0, type: "Credit", date: "23/44/44", status: "Approved", ammount: 1.50}
];

