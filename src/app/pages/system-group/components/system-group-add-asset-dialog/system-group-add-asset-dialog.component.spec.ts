import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupAddAssetDialogComponent } from './system-group-add-asset-dialog.component';

describe('SystemGroupAddAssetDialogComponent', () => {
  let component: SystemGroupAddAssetDialogComponent;
  let fixture: ComponentFixture<SystemGroupAddAssetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupAddAssetDialogComponent]
    });
    fixture = TestBed.createComponent(SystemGroupAddAssetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
