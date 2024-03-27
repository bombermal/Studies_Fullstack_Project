import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {animate, state, style, transition, trigger} from '@angular/animations';
//Service

import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashComponent implements OnInit {
	dataSource = ELEMENT_DATA;
  chartOptions = CHART_OPTIONS;
	columnsToDisplay = ['id', 'account_id', 'type', 'status', 'created_at', 'amount'];
	public expandedElement!: Transactions | null;
  public locale: string = 'en-CA';

  constructor(private sidenavService: SidenavService) { }


  ngOnInit(): void {
    this.sidenavService.getFormat().subscribe(format => {
    this.locale = format;
    // console.log(this.locale);
  });
  }

}

export interface Transactions {
	id: number;
	account_id: number;
	type: string;
	status: string;
	created_at: string;
	amount: number;
}

function convertToString (date: Date, newLocale = 'en-CA') {
	return date.toLocaleDateString(newLocale).replace(/-/g, '/');
}

const ELEMENT_DATA: Transactions[] = [
{ id: 0, account_id: 3, type: 'credit', status: 'open', amount: 45.29, created_at: convertToString(new Date('2023/10/03'), 'en-CA') }
, { id: 1, account_id: 3, type: 'credit', status: 'open', amount: 92.14, created_at: convertToString(new Date('2023/06/10'), 'en-CA') }
, { id: 2, account_id: 3, type: 'credit', status: 'open', amount: 28.74, created_at: convertToString(new Date('2024/04/12'), 'en-CA') }
, { id: 3, account_id: 3, type: 'credit', status: 'open', amount: 41.63, created_at: convertToString(new Date('2023/01/16'), 'en-CA') }
, { id: 4, account_id: 3, type: 'credit', status: 'open', amount: 48.76, created_at: convertToString(new Date('2023/04/16'), 'en-CA') }
, { id: 5, account_id: 3, type: 'credit', status: 'open', amount: 54.02, created_at: convertToString(new Date('2024/01/12'), 'en-CA') }
, { id: 6, account_id: 3, type: 'credit', status: 'open', amount: 35.96, created_at: convertToString(new Date('2023/02/05'), 'en-CA') }
, { id: 7, account_id: 3, type: 'debit', status: 'open', amount: 122.54, created_at: convertToString(new Date('2024/02/20'), 'en-CA') }
, { id: 8, account_id: 3, type: 'debit', status: 'open', amount: 124.54, created_at: convertToString(new Date('2025/05/04'), 'en-CA') }
, { id: 9, account_id: 3, type: 'debit', status: 'open', amount: 84.91, created_at: convertToString(new Date('2025/11/05'), 'en-CA') }
, { id: 10, account_id: 3, type: 'debit', status: 'open', amount: 49.95, created_at: convertToString(new Date('2024/04/13'), 'en-CA') }
, { id: 11, account_id: 3, type: 'debit', status: 'open', amount: 59.81, created_at: convertToString(new Date('2023/01/21'), 'en-CA') }
, { id: 12, account_id: 3, type: 'credit', status: 'open', amount: 124.73, created_at: convertToString(new Date('2025/12/14'), 'en-CA') }
, { id: 13, account_id: 3, type: 'credit', status: 'open', amount: 51.2, created_at: convertToString(new Date('2023/06/05'), 'en-CA') }
, { id: 14, account_id: 3, type: 'debit', status: 'open', amount: 101.14, created_at: convertToString(new Date('2025/06/28'), 'en-CA') }
, { id: 15, account_id: 3, type: 'credit', status: 'open', amount: 41.34, created_at: convertToString(new Date('2023/02/19'), 'en-CA') }
, { id: 16, account_id: 3, type: 'credit', status: 'open', amount: 32.04, created_at: convertToString(new Date('2023/12/09'), 'en-CA') }
, { id: 17, account_id: 3, type: 'debit', status: 'open', amount: 89.68, created_at: convertToString(new Date('2023/09/20'), 'en-CA') }
, { id: 18, account_id: 3, type: 'debit', status: 'open', amount: 84.47, created_at: convertToString(new Date('2023/03/28'), 'en-CA') }
, { id: 19, account_id: 3, type: 'debit', status: 'open', amount: 91.28, created_at: convertToString(new Date('2025/10/10'), 'en-CA') }
];

const CHART_OPTIONS: any = {
  animationEnabled: true,
  theme: "light1",
  title: {
    text: "Historical Balance"
  },
  axisX: {
    valueFormatString: "Y MMM D"
  },
  axisY: {
    title: ""
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
    name: "Income",
    xValueFormatString: "MMM DD",
    dataPoints: ELEMENT_DATA.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
                .filter(account_id => account_id.account_id === 3)            
                .filter(item => item.type === 'credit')
                .map(item => ({x: new Date(item.created_at), y: item.amount})
                )
  }, {
    type: "line",
    showInLegend: true,
    name: "Outcome",
    xValueFormatString: "MMM DD, YYYY",
    dataPoints: ELEMENT_DATA.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .filter(account_id => account_id.account_id === 3)
    .filter(item => item.type === 'debit')    
    .map(item => ({x: new Date(item.created_at), y: item.amount})
    )
  }]
};