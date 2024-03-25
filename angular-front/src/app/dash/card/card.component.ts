import { Component, Input  } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BaseChartDirective
, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income'
        , data: [65, 59, 80, 81, 56, 55, 40]
        , tension: 0.2
        , borderColor: "#37a859"
      }
      , {
        label: 'Outcome'
        , data: [45, 29, 90, 11, 56, 55, 50]
        , tension: 0.2
        , borderColor: "#cf3229"
      }
    ]
  };


  chartOptions = {
   responsive: true
   , maintainAspectRatio: false
   , plugins: { 
            legend: {
            display: true
    }
  }
  }
}
