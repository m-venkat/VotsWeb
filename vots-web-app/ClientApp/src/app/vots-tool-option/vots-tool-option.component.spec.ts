import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotsToolOptionComponent } from './vots-tool-option.component';

describe('VotsToolOptionComponent', () => {
  let component: VotsToolOptionComponent;
  let fixture: ComponentFixture<VotsToolOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotsToolOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotsToolOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
