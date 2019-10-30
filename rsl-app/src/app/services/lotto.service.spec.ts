import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LottoService } from './lotto.service';

describe('LottoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LottoService]
  }));

  it('should be created', () => {
    const service: LottoService = TestBed.get(LottoService);
    expect(service).toBeTruthy();
  });
});
