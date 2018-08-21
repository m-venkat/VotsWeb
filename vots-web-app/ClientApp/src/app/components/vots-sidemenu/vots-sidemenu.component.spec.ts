import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotsSidemenuComponent } from './vots-sidemenu.component';

describe('VotsSidemenuComponent', () => {
  let component: VotsSidemenuComponent;
  let fixture: ComponentFixture<VotsSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotsSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotsSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
