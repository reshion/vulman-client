import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManagementListComponent } from './company-management-list.component';

describe('CompanyManagementListComponent', () => {
  let component: CompanyManagementListComponent;
  let fixture: ComponentFixture<CompanyManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyManagementListComponent]
    });
    fixture = TestBed.createComponent(CompanyManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
