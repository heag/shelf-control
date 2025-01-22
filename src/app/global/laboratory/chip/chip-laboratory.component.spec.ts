import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipLaboratoryComponent } from './chip-laboratory.component';

describe('ChipLaboratoryComponent', () => {
  let component: ChipLaboratoryComponent;
  let fixture: ComponentFixture<ChipLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
