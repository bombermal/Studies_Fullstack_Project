import { Component, Input  } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // @Input() title: string;
}
