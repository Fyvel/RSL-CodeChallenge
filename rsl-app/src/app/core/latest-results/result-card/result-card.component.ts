import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LatestResultModel } from 'src/app/models/LatestResultModel';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCardComponent implements OnInit {

  @Input() data: LatestResultModel;

  private index = 0;

  constructor() { }

  ngOnInit() {
  }

  setDividendIndex(num: number) {
    this.index = (this.index + num < this.data.dividends.length)
      ? (this.index + num >= 0)
        ? this.index + num
        : this.data.dividends.length - 1
      : 0;
  }

}
