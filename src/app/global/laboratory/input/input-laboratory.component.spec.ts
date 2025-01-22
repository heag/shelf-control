import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLaboratoryComponent } from './input-laboratory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputLaboratoryComponent', () => {
  let component: InputLaboratoryComponent;
  let fixture: ComponentFixture<InputLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLaboratoryComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
