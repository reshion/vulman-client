import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCreateDialogComponent } from './assessment-create-dialog.component';

describe('AssessmentCreateDialogComponent', () => {
  let component: AssessmentCreateDialogComponent;
  let fixture: ComponentFixture<AssessmentCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentCreateDialogComponent]
    });
    fixture = TestBed.createComponent(AssessmentCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
