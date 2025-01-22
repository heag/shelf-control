import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { ChartPieData } from '../../components/pie-chart/models/pie-chart-data';

@Component({
  selector: 'hec-pie-chart-laboratory',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './pie-chart-laboratory.component.html',
  styleUrl: './pie-chart-laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartLaboratoryComponent {
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
