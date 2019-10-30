import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardComponent } from './result-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LatestResultModel } from 'src/app/models/LatestResultModel';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;
  let fixture: ComponentFixture<ResultCardComponent>;

  const dummyData: LatestResultModel = {
    productDisplayName: 'Oy oy',
    primaryNumbers: [2, 45, 78, 96, 45],
    secondaryNumbers: [20, 11],
    drawDate: new Date().toISOString(),
    drawNumber: 123,
    logoImage: 'http://media.tatts.com/TattsServices/Lotto/Products/MonWedTattsLotto_v1.png',
    dividends: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCardComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardComponent);
    component = fixture.componentInstance;
    component.data = dummyData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase/decrease DividendIndex', () => {
    // arrange
    const step = 1;
    const currentIndex = component["index"];
    const data = { ...dummyData, dividends: [{}, {}, {}] };
    component.data = data;
    // act
    component.setDividendIndex(step);
    // assert
    expect(component["index"]).toBe(currentIndex + step);

  });

  it('should set DividendeIndex to 0 when array limit is reached', () => {
    // arrange
    const step = 1;
    const data = { ...dummyData, dividends: [{}, {}, {}] };
    component.data = data;
    component["index"] = data.dividends.length - 1;
    // act
    component.setDividendIndex(step);
    // assert
    expect(component["index"]).toBe(0);
  });

  it('should set DividendeIndex to the idex of the last item of the array when 0 is reached', () => {
    // arrange
    const step = 1;
    const data = { ...dummyData, dividends: [{}, {}, {}] };
    component.data = data;
    component["index"] = 0;
    // act
    component.setDividendIndex(-step);
    // assert
    expect(component["index"]).toBe(data.dividends.length - 1);
  });
});
