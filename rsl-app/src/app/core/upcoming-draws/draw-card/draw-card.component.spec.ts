import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCardComponent } from './draw-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OpenDrawModel } from 'src/app/models/OpenDrawModel';

describe('DrawCardComponent', () => {
  let component: DrawCardComponent;
  let fixture: ComponentFixture<DrawCardComponent>;

  const dummyData: OpenDrawModel = {
    drawDate: new Date().toISOString(),
    drawDisplayName: 'Hi there',
    drawNumber: 123,
    drawTime: new Date().toISOString(),
    logoImage: ''
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCardComponent);
    component = fixture.componentInstance;
    component.data = dummyData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
