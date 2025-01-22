import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxLaboratoryComponent } from './checkbox-laboratory.component';

describe('CheckboxLaboratoryComponent', () => {
  let component: CheckboxLaboratoryComponent;
  let fixture: ComponentFixture<CheckboxLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
