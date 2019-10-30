import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDrawsComponent } from './upcoming-draws.component';
import { DrawCardModule } from './draw-card/draw-card.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LottoService } from 'src/app/services/lotto.service';
import { LatestResultQueryModel } from 'src/app/models/LatestResultQueryModel';
import { OpenDrawQueryModel } from 'src/app/models/OpenDrawQueryModel';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpcomingDrawsComponent', () => {
  let component: UpcomingDrawsComponent;
  let fixture: ComponentFixture<UpcomingDrawsComponent>;
  let mockService: LottoService;

  beforeEach(async(() => {

    mockService = {
      getLatestResults: (query: LatestResultQueryModel) => ({}),
      getOpenDraws: (query: OpenDrawQueryModel) => ({})
    } as LottoService;

    TestBed.configureTestingModule({
      declarations: [UpcomingDrawsComponent],
      imports: [
        DrawCardModule,
        HttpClientTestingModule],
      providers: [LottoService],
      schemas: [NO_ERRORS_SCHEMA]
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
