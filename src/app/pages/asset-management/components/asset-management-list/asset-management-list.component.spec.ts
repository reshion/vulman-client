import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetManagementListComponent } from './asset-management-list.component';

describe('AssetManagementListComponent', () => {
  let component: AssetManagementListComponent;
  let fixture: ComponentFixture<AssetManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetManagementListComponent]
    });
    fixture = TestBed.createComponent(AssetManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
