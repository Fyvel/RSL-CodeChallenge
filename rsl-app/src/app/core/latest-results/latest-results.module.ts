import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestResultsRoutingModule } from './latest-results-routing.module';
import { LatestResultsComponent } from './latest-results.component';


@NgModule({
  declarations: [LatestResultsComponent],
  imports: [
    CommonModule,
    LatestResultsRoutingModule
  ]
})
export class LatestResultsModule { }
