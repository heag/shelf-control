import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';
import { By } from '@angular/platform-browser';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let fixture: ComponentFixture<CheckboxComponent>;
  let component: CheckboxComponent;
  const formControl = new FormControl(false);
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule, ReactiveFormsModule, CheckboxComponent],
    });

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.formControl = formControl;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should apply the correct ngClass based on the "type" input', () => {
    component.type = 'secondary';
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(
      By.css('.hec-checkbox')
    ).nativeElement;
    fixture.detectChanges();
    expect(checkbox.classList.contains('hec-checkbox--secondary')).toBeTrue();
  });

  it('should apply the correct ngClass based on the "size" input', () => {
    component.size = 'small';
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(
      By.css('.hec-checkbox')
    ).nativeElement;
    expect(checkbox.classList.contains('hec-checkbox--small')).toBeTrue();
  });

  it('should bind "indeterminate" correctly for two-way binding', async () => {
    component.indeterminate = true;
    fixture.detectChanges();
    let checkbox = await loader.getHarness(MatCheckboxHarness);
    expect(await checkbox.isIndeterminate()).toBeTrue();
  });

  it('should bind the formControl correctly', async () => {
    component.formControl.setValue(true);
    fixture.detectChanges();
    const checkbox = await loader.getHarness(MatCheckboxHarness);
    expect(await checkbox.isChecked()).toBeTrue();

    component.formControl.setValue(false);
    fixture.detectChanges();
    expect(await checkbox.isChecked()).toBeFalse();
  });

  it('should apply the correct classes based on both type and size', () => {
    component.type = 'success';
    component.size = 'medium';
    fixture.detectChanges();

    const checkbox = fixture.debugElement.query(
      By.css('.hec-checkbox')
    ).nativeElement;
    expect(checkbox.classList.contains('hec-checkbox--success')).toBeTrue();
    expect(checkbox.classList.contains('hec-checkbox--medium')).toBeTrue();
  });
});
