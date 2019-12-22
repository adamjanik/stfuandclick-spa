import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTitleComponent } from './team-title.component';

describe('TeamTitleComponent', () => {
  let component: TeamTitleComponent;
  let fixture: ComponentFixture<TeamTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
