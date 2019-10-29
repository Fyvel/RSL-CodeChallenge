import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDrawsComponent } from './upcoming-draws.component';

describe('UpcomingDrawsComponent', () => {
  let component: UpcomingDrawsComponent;
  let fixture: ComponentFixture<UpcomingDrawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingDrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingDrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
