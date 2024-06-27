import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupListComponent } from './system-group-list.component';

describe('SystemGroupListComponent', () => {
  let component: SystemGroupListComponent;
  let fixture: ComponentFixture<SystemGroupListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupListComponent]
    });
    fixture = TestBed.createComponent(SystemGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
