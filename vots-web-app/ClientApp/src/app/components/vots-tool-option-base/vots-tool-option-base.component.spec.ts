import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotsToolOptionBaseComponent } from './vots-tool-option-base.component';

describe('VotsToolOptionBaseComponent', () => {
  let component: VotsToolOptionBaseComponent;
  let fixture: ComponentFixture<VotsToolOptionBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotsToolOptionBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotsToolOptionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
