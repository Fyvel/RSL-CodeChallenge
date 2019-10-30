import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestResultsComponent } from './latest-results.component';
import { ResultCardModule } from './result-card/result-card.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LottoService } from 'src/app/services/lotto.service';
import { LatestResultQueryModel } from 'src/app/models/LatestResultQueryModel';
import { OpenDrawQueryModel } from 'src/app/models/OpenDrawQueryModel';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LatestResultsComponent', () => {
  let component: LatestResultsComponent;
  let fixture: ComponentFixture<LatestResultsComponent>;
  let mockService: LottoService;

  beforeEach(async(() => {

    mockService = {
      getLatestResults: (query: LatestResultQueryModel) => ({}),
      getOpenDraws: (query: OpenDrawQueryModel) => ({})
    } as LottoService;

    TestBed.configureTestingModule({
      declarations: [LatestResultsComponent],
      imports: [
        ResultCardModule,
        HttpClientTestingModule],
      providers: [LottoService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
