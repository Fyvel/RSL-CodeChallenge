import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestResultsRoutingModule } from './latest-results-routing.module';
import { LatestResultsComponent } from './latest-results.component';
import { CardModule } from './card/card.module';


@NgModule({
  declarations: [LatestResultsComponent],
  imports: [
    CommonModule,
    CardModule,
    LatestResultsRoutingModule
  ]
})
export class LatestResultsModule { }
