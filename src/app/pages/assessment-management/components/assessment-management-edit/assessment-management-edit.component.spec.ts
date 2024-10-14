import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentManagementEditComponent } from './assessment-management-edit.component';

describe('AssessmentManagementEditComponent', () => {
  let component: AssessmentManagementEditComponent;
  let fixture: ComponentFixture<AssessmentManagementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentManagementEditComponent]
    });
    fixture = TestBed.createComponent(AssessmentManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
