import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DashComponent } from './dash/dash.component';
import { CardComponent } from './dash/card/card.component';
import { TableChartComponent } from './dash/table-chart/table-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
    , HeaderComponent
    , BodyComponent
    , DashComponent
  , CardComponent
  , TableChartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simplebank';
}
