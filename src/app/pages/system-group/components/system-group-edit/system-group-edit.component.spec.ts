import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupEditComponent } from './system-group-edit.component';

describe('SystemGroupEditComponent', () => {
  let component: SystemGroupEditComponent;
  let fixture: ComponentFixture<SystemGroupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupEditComponent]
    });
    fixture = TestBed.createComponent(SystemGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
