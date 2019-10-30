import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OpenDrawModel } from 'src/app/models/OpenDrawModel';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawCardComponent implements OnInit {

  @Input() data: OpenDrawModel;

  constructor() {
  }

  ngOnInit() {
  }

}
