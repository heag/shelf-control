import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeLaboratoryComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeLaboratoryComponent;
  let fixture: ComponentFixture<WelcomeLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
