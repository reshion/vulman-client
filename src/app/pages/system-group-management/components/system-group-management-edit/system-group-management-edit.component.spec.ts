import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupManagementEditComponent } from './system-group-management-edit.component';

describe('SystemGroupManagementEditComponent', () => {
  let component: SystemGroupManagementEditComponent;
  let fixture: ComponentFixture<SystemGroupManagementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupManagementEditComponent]
    });
    fixture = TestBed.createComponent(SystemGroupManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
