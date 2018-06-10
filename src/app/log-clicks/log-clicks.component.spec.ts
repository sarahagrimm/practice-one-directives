import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogClicksComponent } from './log-clicks.component';

describe('LogClicksComponent', () => {
  let component: LogClicksComponent;
  let fixture: ComponentFixture<LogClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
