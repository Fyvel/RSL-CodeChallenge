import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LottoService } from 'src/app/services/lotto.service';

@Component({
  selector: 'app-upcoming-draws',
  templateUrl: './upcoming-draws.component.html',
  styleUrls: ['./upcoming-draws.component.scss']
})
export class UpcomingDrawsComponent implements OnInit {

  openDraws$: Observable<OpenDrawModel[]>;

  // hard coded query for now
  query = {
    CompanyId: 'Tattersalls',
    MaxDrawCount: 10,
    OptionalProductFilter: [
      'OZlotto',
      'Powerball',
      'TattsLotto'
    ]
  };

  constructor(private lottoSrv: LottoService) {
    this.openDraws$ = this.lottoSrv.getOpenDraws(this.query)
  }

  ngOnInit() {
  }

}
