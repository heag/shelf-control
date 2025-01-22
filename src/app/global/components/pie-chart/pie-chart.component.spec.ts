import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChartPieData } from './models/pie-chart-data';
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  const chartDataMock: ChartPieData[] = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    component.data = chartDataMock;
    component.radius = 100;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default width and height', () => {
    expect(component.width).toBe(250);
    expect(component.height).toBe(250);
  });

  it('should not render any circles if circleProperties is empty', () => {
    component.circleArcProperties = [];
    fixture.detectChanges();

    const circles = fixture.debugElement.queryAll(By.css('circle-arc'));
    expect(circles.length).toBe(0);
  });
});
