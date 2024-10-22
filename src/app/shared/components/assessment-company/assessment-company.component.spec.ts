import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCompanyComponent } from './assessment-company.component';

describe('AssessmentCompanyComponent', () => {
  let component: AssessmentCompanyComponent;
  let fixture: ComponentFixture<AssessmentCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentCompanyComponent]
    });
    fixture = TestBed.createComponent(AssessmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
