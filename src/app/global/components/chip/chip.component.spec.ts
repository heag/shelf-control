import { NgClass } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChipComponent } from './chip.component';

fdescribe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent, NgClass],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
  });

  // Test case 1: Default class bindings
  it('should have the default classes based on default inputs', () => {
    fixture.detectChanges();
    const chipElement = fixture.debugElement.query(By.css('.hec-chip'));
    expect(chipElement.nativeElement.classList).toContain('hec-chip--primary');
    expect(chipElement.nativeElement.classList).toContain('hec-chip--filled');
  });

  // Test case 2: Color input as "secondary"
  it('should add "hec-chip--secondary" class when color is secondary', () => {
    component.color = 'secondary';
    fixture.detectChanges();
    const chipElement = fixture.debugElement.query(By.css('.hec-chip'));
    expect(chipElement.nativeElement.classList).toContain('hec-chip--secondary');
  });

  // Test case 3: Variant input as "outlined"
  it('should add "hec-chip--outline" class when variant is outlined', () => {
    component.variant = 'outlined';
    fixture.detectChanges();
    const chipElement = fixture.debugElement.query(By.css('.hec-chip'));
    expect(chipElement.nativeElement.classList).toContain('hec-chip--outline');
    expect(chipElement.nativeElement.classList).not.toContain('hec-chip--filled');
  });

  // Test case 4: Size input as "small"
  it('should add "hec-chip--small" class when size is small', () => {
    component.size = 'small';
    fixture.detectChanges();
    const chipElement = fixture.debugElement.query(By.css('.hec-chip'));
    expect(chipElement.nativeElement.classList).toContain('hec-chip--small');
    expect(chipElement.nativeElement.classList).not.toContain('hec-chip--large');
  });

  // Test case 5: Multiple input combinations
  it('should add correct classes for a specific combination of inputs', () => {
    component.color = 'error';
    component.variant = 'outlined';
    component.size = 'small';
    fixture.detectChanges();
    const chipElement = fixture.debugElement.query(By.css('.hec-chip'));
    expect(chipElement.nativeElement.classList).toContain('hec-chip--error');
    expect(chipElement.nativeElement.classList).toContain('hec-chip--outline');
    expect(chipElement.nativeElement.classList).toContain('hec-chip--small');
  });
});
