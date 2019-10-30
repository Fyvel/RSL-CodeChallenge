import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

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
