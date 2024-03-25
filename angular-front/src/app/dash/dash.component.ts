import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Components
import { CardComponent } from './card/card.component';
import { TableChartComponent } from './table-chart/table-chart.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css',
  standalone: true,
  imports: [
    AsyncPipe
    , MatGridListModule
    , MatMenuModule
    , MatIconModule
    , MatButtonModule
    , MatCardModule
    , CardComponent
    , TableChartComponent
  ]
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);

}
