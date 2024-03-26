import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  
})
export class DashComponent {

  /** Based on the screen size, switch from standard to one column per row */
  public dataSource = ELEMENT_DATA;
  public columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  public columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  public expandedElement!: PeriodicElement | null;
  public chart: any;

  constructor(private breakpointObserver: BreakpointObserver) { }

  public chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Actual vs Projected Sales"
    },
    axisX: {
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
	description: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
	{
	  position: 1,
	  name: 'Hydrogen',
	  weight: 1.0079,
	  symbol: 'H',
	  description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
		  atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
	},
	{
	  position: 2,
	  name: 'Helium',
	  weight: 4.0026,
	  symbol: 'He',
	  description: `Helium is a chemical element with symbol He and atomic number 2. It is a
		  colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
		  group in the periodic table. Its boiling point is the lowest among all the elements.`,
	},
	{
	  position: 3,
	  name: 'Lithium',
	  weight: 6.941,
	  symbol: 'Li',
	  description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
		  silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
		  lightest solid element.`,
	},
	{
	  position: 4,
	  name: 'Beryllium',
	  weight: 9.0122,
	  symbol: 'Be',
	  description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
		  relatively rare element in the universe, usually occurring as a product of the spallation of
		  larger atomic nuclei that have collided with cosmic rays.`,
	},
	{
	  position: 5,
	  name: 'Boron',
	  weight: 10.811,
	  symbol: 'B',
	  description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
		  by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
		  low-abundance element in the Solar system and in the Earth's crust.`,
	},
	{
	  position: 6,
	  name: 'Carbon',
	  weight: 12.0107,
	  symbol: 'C',
	  description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
		  and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
		  to group 14 of the periodic table.`,
	},
	{
	  position: 7,
	  name: 'Nitrogen',
	  weight: 14.0067,
	  symbol: 'N',
	  description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
		  discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
	},
	{
	  position: 8,
	  name: 'Oxygen',
	  weight: 15.9994,
	  symbol: 'O',
	  description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
		   the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
		   agent that readily forms oxides with most elements as well as with other compounds.`,
	},
	{
	  position: 9,
	  name: 'Fluorine',
	  weight: 18.9984,
	  symbol: 'F',
	  description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
		  lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
		  conditions.`,
	},
	{
	  position: 10,
	  name: 'Neon',
	  weight: 20.1797,
	  symbol: 'Ne',
	  description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
		  Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
		  two-thirds the density of air.`,
	},
  ];