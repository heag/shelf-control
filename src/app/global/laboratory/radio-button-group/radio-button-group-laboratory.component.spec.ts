import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonGroupLaboratoryComponent } from './radio-button-group-laboratory.component';

describe('RadioButtonGroupLaboratoryComponent', () => {
  let component: RadioButtonGroupLaboratoryComponent;
  let fixture: ComponentFixture<RadioButtonGroupLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonGroupLaboratoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonGroupLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
