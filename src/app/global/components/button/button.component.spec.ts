import { NgClass } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HecButtonComponent } from './button.component';

describe('HecButtonComponent', () => {
  let component: HecButtonComponent;
  let fixture: ComponentFixture<HecButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HecButtonComponent, NgClass],
    }).compileComponents();

    fixture = TestBed.createComponent(HecButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.size).toBe('medium');
    expect(component.type).toBe('primary');
    expect(component.variant).toBe('contained');
    expect(component.disabled).toBeUndefined();
    expect(component.fluid).toBeUndefined(); 
  });

  it('should apply the correct class for the default size', () => {
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));

    expect(buttonElement.nativeElement.classList).toContain('hec-button--medium');
  });

  it('should apply the correct class when size is changed', () => {
    component.size = 'small';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('hec-button--small');
  });

  it('should apply the correct class for the type', () => {
    component.type = 'success';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('hec-button--success');
  });

  it('should apply the correct class for the variant', () => {
    component.variant = 'outline';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('hec-button--outline');
  });

  it('should be disabled when the disabled input is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.disabled).toBeTrue();
  });

  it('should not be disabled when the disabled input is false', () => {
    component.disabled = false;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.disabled).toBeFalse();
  });

  it('should apply the fluid class when the fluid input is true', () => {
    component.fluid = true;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('hec-button--fluid');
  });

  it('should not apply the fluid class when the fluid input is false', () => {
    component.fluid = false;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).not.toContain('hec-button--fluid');
  });
});
