import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAssetComponent } from './assessment-asset.component';

describe('AssessmentAssetComponent', () => {
  let component: AssessmentAssetComponent;
  let fixture: ComponentFixture<AssessmentAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentAssetComponent]
    });
    fixture = TestBed.createComponent(AssessmentAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
