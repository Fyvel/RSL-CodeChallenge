import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LottoService } from './lotto.service';
import { environment } from 'src/environments/environment';
import { expectedDraws, dummyDraws, expectedResults, dummyResults } from './lotto.service.dummy-data.spec';

describe('LottoService', () => {
  let injector: TestBed;
  let service: LottoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LottoService]
    });

    injector = getTestBed();
    service = injector.get(LottoService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(TestBed.get(LottoService)).toBeTruthy();
  });

  it('getOpenDraws(query: OpenDrawQueryModel) should return OpenDrawModel[]', () => {
    // arrange
    const dummyDrawsQuery = {
      CompanyId: 'Tattersalls',
      MaxDrawCount: 10,
      OptionalProductFilter: [
        'OZlotto',
        'Powerball',
        'TattsLotto'
      ]
    };

    // act
    service.getOpenDraws(dummyDrawsQuery).subscribe((res) => {
      // assert
      expect(res).toEqual(expectedDraws);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}/opendraws`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyDraws);
  });

  it('getOpenDraws(...) should work with empty result from api', () => {
    // arrange
    const dummyDrawsQuery = {
      CompanyId: 'Tattersalls',
      MaxDrawCount: 10,
      OptionalProductFilter: [
        'OZlotto',
        'Powerball',
        'TattsLotto'
      ]
    };

    // act
    service.getOpenDraws(dummyDrawsQuery).subscribe((res) => {
      // assert
      expect(res).toEqual([]);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}/opendraws`);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('getLatestResults(query: LatestResultQueryModel) should return LatestResultModel[]', () => {
    // arrange
    const dummyResultsQuery = {
      CompanyId: 'Tattersalls',
      MaxDrawCountPerProduct: 10,
      OptionalProductFilter: [
        'OZlotto',
        'Powerball',
        'TattsLotto'
      ]
    };

    // act
    service.getLatestResults(dummyResultsQuery).subscribe((res) => {
      // assert
      expect(res).toEqual(expectedResults);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}/latestresults`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyResults);
  });

  it('getLatestResults(...) should work with empty result from api', () => {
    // arrange
    const dummyResultsQuery = {
      CompanyId: 'Tattersalls',
      MaxDrawCountPerProduct: 10,
      OptionalProductFilter: [
        'OZlotto',
        'Powerball',
        'TattsLotto'
      ]
    };

    // act
    service.getLatestResults(dummyResultsQuery).subscribe((res) => {
      // assert
      expect(res).toEqual([]);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}/latestresults`);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
