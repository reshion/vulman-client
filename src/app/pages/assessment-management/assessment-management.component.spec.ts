import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentManagementComponent } from './assessment-management.component';

describe('AssessmentManagementComponent', () => {
  let component: AssessmentManagementComponent;
  let fixture: ComponentFixture<AssessmentManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentManagementComponent]
    });
    fixture = TestBed.createComponent(AssessmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
