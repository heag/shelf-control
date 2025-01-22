import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CircleArc } from './models/circle-arc';
import { ChartPieData } from './models/pie-chart-data';

export const WIDTH_CALC = 2.5;
export const STROKE_CALC = 2;
export const STROKE_CALC_DIV = 7;

@Component({
  selector: 'hec-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit {
  @Input({ required: true }) radius: number; // To consider set default value = 30.
  @Input({ required: true }) data: ChartPieData[];
  @Input() gapSpace: 0 | 1 | 2 | 3 = 2;
  @Input() strokeWidth: 2 | 3 = 2;
  circleArcProperties: CircleArc[];
  width: number;
  height: number;

  readonly cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    if (this.radius && this.data) {
      this.initPieChart(this.data);
    }
  }

  initPieChart(chartData: ChartPieData[]) {
    const widthCalc = 2.5;
    this.width = this.radius * widthCalc;
    this.height = this.radius * widthCalc;
    const strokeWidth = (this.radius * this.strokeWidth) / 7;
    const perimeter = 2 * Math.PI * this.radius;

    const nonZeroData = chartData.filter((x) => x.value > 0);

    const numberOfNonZeroValues = nonZeroData.length;
    const totalValue = nonZeroData.reduce((acc, curr) => acc + curr.value, 0);

    const numberOfGaps = numberOfNonZeroValues > 1 ? numberOfNonZeroValues : 0;
    const gapValue = (this.gapSpace * totalValue) / 360;
    const totalValueWithGaps = totalValue + numberOfGaps * gapValue;
    const gapLength = (gapValue * perimeter) / totalValueWithGaps;
    let accumulatedLength = 0;

    const payload = nonZeroData.map((data) => {
      const colorVariableName = 'var(--chart-' + data.order + ')';
      data.colorVariableName = colorVariableName;
      const valueLength = (data.value * perimeter) / totalValueWithGaps;
      if (valueLength === 0) {
        return null;
      }

      const circle = {
        cx: this.width / 2,
        cy: this.width / 2,
        radius: this.radius,
        fill: 'none',
        stroke: colorVariableName,
        strokeWidth,
        strokeDashoffset: -accumulatedLength,
        strokeDashArray: `${valueLength} ${perimeter}`,
        class: null,
        name: data.label,
      };
      accumulatedLength += valueLength + gapLength;
      return circle;
    });

    this.circleArcProperties = payload as unknown as CircleArc[];
    this.cd.detectChanges();
  }
}
