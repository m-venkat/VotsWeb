import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabstripContainerComponent } from './tabstrip-container.component';

describe('TabstripContainerComponent', () => {
  let component: TabstripContainerComponent;
  let fixture: ComponentFixture<TabstripContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabstripContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabstripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
