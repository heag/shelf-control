import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { ChartPieData } from '../../components/pie-chart/models/pie-chart-data';

@Component({
  selector: 'hec-card-laboratory',
  imports: [CardComponent, PieChartComponent],
  templateUrl: './card-laboratory.component.html',
  styleUrl: './card-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLaboratoryComponent {
  chartData: ChartPieData[] = [
    {
      label: 'FrontEnd',
      value: 55,
      order: 1,
    },
    {
      label: 'Backend',
      value: 35,
      order: 2,
    },
    {
      label: 'Devops',
      value: 10,
      order: 3,
    },
  ];
}
