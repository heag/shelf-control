import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaboratoryComponent } from './card-laboratory.component';

describe('CardLaboratoryComponent', () => {
  let component: CardLaboratoryComponent;
  let fixture: ComponentFixture<CardLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
