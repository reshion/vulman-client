import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSeverityIndicatorComponent } from './base-severity-indicator.component';

describe('BaseSeverityIndicatorComponent', () => {
  let component: BaseSeverityIndicatorComponent;
  let fixture: ComponentFixture<BaseSeverityIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseSeverityIndicatorComponent]
    });
    fixture = TestBed.createComponent(BaseSeverityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
