import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LottoService } from 'src/app/services/lotto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-results',
  templateUrl: './latest-results.component.html',
  styleUrls: ['./latest-results.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestResultsComponent implements OnInit {

  query = {
    CompanyId: 'Tattersalls',
    MaxDrawCountPerProduct: 10,
    OptionalProductFilter: [
      'OZlotto',
      'Powerball',
      'TattsLotto'
    ]
  };

  latestResults$: Observable<any[]>;

  constructor(private lottoSrv: LottoService) {
    this.latestResults$ = this.lottoSrv.getLatestResults(this.query);
  }

  ngOnInit() {
  }

}
