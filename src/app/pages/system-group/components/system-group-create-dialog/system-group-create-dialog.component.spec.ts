import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupCreateDialogComponent } from './system-group-create-dialog.component';

describe('SystemGroupCreateDialogComponent', () => {
  let component: SystemGroupCreateDialogComponent;
  let fixture: ComponentFixture<SystemGroupCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemGroupCreateDialogComponent]
    });
    fixture = TestBed.createComponent(SystemGroupCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
