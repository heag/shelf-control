import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartLaboratoryComponent } from './pie-chart-laboratory.component';

describe('PieChartLaboratoryComponent', () => {
  let component: PieChartLaboratoryComponent;
  let fixture: ComponentFixture<PieChartLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartLaboratoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PieChartLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
