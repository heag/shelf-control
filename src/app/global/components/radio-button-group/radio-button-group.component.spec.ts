import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { RadioButtonGroupComponent } from './radio-button-group.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonGroupComponent;
  let fixture: ComponentFixture<RadioButtonGroupComponent>;
  let changeDetectorRef: ChangeDetectorRef;
  const formControl = new FormControl();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonGroupComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonGroupComponent);
    component = fixture.componentInstance;
    changeDetectorRef = fixture.componentRef.injector.get(ChangeDetectorRef);
    component.formControl = formControl;

    changeDetectorRef.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
