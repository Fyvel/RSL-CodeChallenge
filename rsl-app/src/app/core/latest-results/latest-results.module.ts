import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LatestResultsRoutingModule } from './latest-results-routing.module';
import { LatestResultsComponent } from './latest-results.component';
import { ResultCardModule } from './result-card/result-card.module';

@NgModule({
  declarations: [LatestResultsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ResultCardModule,
    LatestResultsRoutingModule
  ]
})
export class LatestResultsModule { }
