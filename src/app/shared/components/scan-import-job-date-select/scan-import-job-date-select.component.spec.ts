import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanImportJobDateSelectComponent } from './scan-import-job-date-select.component';

describe('ScanImportJobDateSelectComponent', () => {
  let component: ScanImportJobDateSelectComponent;
  let fixture: ComponentFixture<ScanImportJobDateSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanImportJobDateSelectComponent]
    });
    fixture = TestBed.createComponent(ScanImportJobDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
