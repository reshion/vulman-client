import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentDialogComponent } from './assessment-dialog.component';

describe('AssessmentDialogComponent', () => {
  let component: AssessmentDialogComponent;
  let fixture: ComponentFixture<AssessmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentDialogComponent]
    });
    fixture = TestBed.createComponent(AssessmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
