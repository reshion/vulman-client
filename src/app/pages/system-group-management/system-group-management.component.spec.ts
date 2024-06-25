import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupManagementComponent } from './system-group-management.component';

describe('SystemGroupManageComponent', () =>
{
  let component: SystemGroupManagementComponent;
  let fixture: ComponentFixture<SystemGroupManagementComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [SystemGroupManagementComponent]
    });
    fixture = TestBed.createComponent(SystemGroupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
