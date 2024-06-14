import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupManageComponent } from './system-group-manage.component';

describe('SystemGroupManageComponent', () => {
  let component: SystemGroupManageComponent;
  let fixture: ComponentFixture<SystemGroupManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupManageComponent]
    });
    fixture = TestBed.createComponent(SystemGroupManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
