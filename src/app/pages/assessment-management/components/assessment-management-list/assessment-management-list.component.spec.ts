import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentManagementListComponent } from './assessment-management-list.component';

describe('AssessmentManagementListComponent', () => {
  let component: AssessmentManagementListComponent;
  let fixture: ComponentFixture<AssessmentManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentManagementListComponent]
    });
    fixture = TestBed.createComponent(AssessmentManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
