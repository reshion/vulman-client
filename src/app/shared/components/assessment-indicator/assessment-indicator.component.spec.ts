import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentIndicatorComponent } from './assessment-indicator.component';

describe('AssessmentIndicatorComponent', () => {
  let component: AssessmentIndicatorComponent;
  let fixture: ComponentFixture<AssessmentIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentIndicatorComponent]
    });
    fixture = TestBed.createComponent(AssessmentIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
