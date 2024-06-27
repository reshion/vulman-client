import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanImportJobListComponent } from './scan-import-job-list.component';

describe('ScanImportJobListComponent', () => {
  let component: ScanImportJobListComponent;
  let fixture: ComponentFixture<ScanImportJobListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanImportJobListComponent]
    });
    fixture = TestBed.createComponent(ScanImportJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
