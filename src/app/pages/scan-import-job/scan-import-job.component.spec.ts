import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanImportJobComponent } from './scan-import-job.component';

describe('ImportsComponent', () =>
{
  let component: ScanImportJobComponent;
  let fixture: ComponentFixture<ScanImportJobComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [ScanImportJobComponent]
    });
    fixture = TestBed.createComponent(ScanImportJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
