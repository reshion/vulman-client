import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetManagementComponent } from './asset-management.component';

describe('AssetComponent', () =>
{
  let component: AssetManagementComponent;
  let fixture: ComponentFixture<AssetManagementComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [AssetManagementComponent]
    });
    fixture = TestBed.createComponent(AssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
