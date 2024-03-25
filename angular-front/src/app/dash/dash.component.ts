import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { BaseChartDirective } from 'ng2-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


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
    , MatTableModule
    , BaseChartDirective
    , CanvasJSAngularChartsModule
  ]
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: "Actual vs Projected Sales"
	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Number of Sales"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Projected Sales",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 63 },
			{ x: new Date(2021, 8, 2), y: 69 },
			{ x: new Date(2021, 8, 3), y: 65 },
			{ x: new Date(2021, 8, 4), y: 70 },
			{ x: new Date(2021, 8, 5), y: 71 },
			{ x: new Date(2021, 8, 6), y: 65 },
			{ x: new Date(2021, 8, 7), y: 73 },
			{ x: new Date(2021, 8, 8), y: 86 },
			{ x: new Date(2021, 8, 9), y: 74 },
			{ x: new Date(2021, 8, 10), y: 75 },
			{ x: new Date(2021, 8, 11), y: 76 },
			{ x: new Date(2021, 8, 12), y: 84 },
			{ x: new Date(2021, 8, 13), y: 87 },
			{ x: new Date(2021, 8, 14), y: 76 },
			{ x: new Date(2021, 8, 15), y: 79 }
		]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Actual Sales",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 60 },
			{ x: new Date(2021, 8, 2), y: 57 },
			{ x: new Date(2021, 8, 3), y: 51 },
			{ x: new Date(2021, 8, 4), y: 56 },
			{ x: new Date(2021, 8, 5), y: 54 },
			{ x: new Date(2021, 8, 6), y: 55 },
			{ x: new Date(2021, 8, 7), y: 54 },
			{ x: new Date(2021, 8, 8), y: 69 },
			{ x: new Date(2021, 8, 9), y: 65 },
			{ x: new Date(2021, 8, 10), y: 66 },
			{ x: new Date(2021, 8, 11), y: 63 },
			{ x: new Date(2021, 8, 12), y: 67 },
			{ x: new Date(2021, 8, 13), y: 66 },
			{ x: new Date(2021, 8, 14), y: 56 },
			{ x: new Date(2021, 8, 15), y: 64 }
		]
	  }]
	}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 6, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 6, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
];