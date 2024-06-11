import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComponent } from './asset.component';

describe('AssetComponent', () =>
{
  let component: AssetsComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [AssetComponent]
    });
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
