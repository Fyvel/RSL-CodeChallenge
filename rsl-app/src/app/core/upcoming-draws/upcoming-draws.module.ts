import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UpcomingDrawsRoutingModule } from './upcoming-draws-routing.module';
import { UpcomingDrawsComponent } from './upcoming-draws.component';
import { DrawCardModule } from './draw-card/draw-card.module';


@NgModule({
  declarations: [UpcomingDrawsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    DrawCardModule,
    UpcomingDrawsRoutingModule
  ]
})
export class UpcomingDrawsModule { }
