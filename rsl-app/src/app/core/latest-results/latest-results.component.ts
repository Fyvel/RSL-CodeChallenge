import { Component, OnInit } from '@angular/core';
import { LottoService } from 'src/app/services/lotto.service';
import { Observable } from 'rxjs';
import { LatestResultModel } from 'src/app/models/LatestResultModel';

@Component({
  selector: 'app-latest-results',
  templateUrl: './latest-results.component.html',
  styleUrls: ['./latest-results.component.scss']
})
export class LatestResultsComponent implements OnInit {

  // hard coded query for now
  query = {
    CompanyId: 'Tattersalls',
    MaxDrawCountPerProduct: 10,
    OptionalProductFilter: [
      'OZlotto',
      'Powerball',
      'TattsLotto'
    ]
  };

  latestResults$: Observable<LatestResultModel[]>;

  constructor(private lottoSrv: LottoService) {
    this.latestResults$ = this.lottoSrv.getLatestResults(this.query);
  }

  ngOnInit() {
  }

}
