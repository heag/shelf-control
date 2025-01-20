import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLaboratoryComponent } from './button-laboratory.component';

describe('ButtonLaboratoryComponent', () => {
  let component: ButtonLaboratoryComponent;
  let fixture: ComponentFixture<ButtonLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
