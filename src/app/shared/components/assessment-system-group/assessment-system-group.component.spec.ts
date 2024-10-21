import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSystemGroupComponent } from './assessment-system-group.component';

describe('AssessmentSystemGroupComponent', () => {
  let component: AssessmentSystemGroupComponent;
  let fixture: ComponentFixture<AssessmentSystemGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentSystemGroupComponent]
    });
    fixture = TestBed.createComponent(AssessmentSystemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
