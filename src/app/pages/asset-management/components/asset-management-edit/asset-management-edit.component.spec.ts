import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetManagementEditComponent } from './asset-management-edit.component';

describe('AssetManagementEditComponent', () => {
  let component: AssetManagementEditComponent;
  let fixture: ComponentFixture<AssetManagementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetManagementEditComponent]
    });
    fixture = TestBed.createComponent(AssetManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
