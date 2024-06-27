import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupManagementListComponent } from './system-group-management-list.component';

describe('SystemGroupManagementListComponent', () => {
  let component: SystemGroupManagementListComponent;
  let fixture: ComponentFixture<SystemGroupManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupManagementListComponent]
    });
    fixture = TestBed.createComponent(SystemGroupManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
