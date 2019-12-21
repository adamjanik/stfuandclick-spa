import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StfuClickComponent } from './stfu-click.component';

describe('StfuClickComponent', () => {
  let component: StfuClickComponent;
  let fixture: ComponentFixture<StfuClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StfuClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StfuClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
