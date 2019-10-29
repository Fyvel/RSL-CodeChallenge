import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingDrawsRoutingModule } from './upcoming-draws-routing.module';
import { UpcomingDrawsComponent } from './upcoming-draws.component';


@NgModule({
  declarations: [UpcomingDrawsComponent],
  imports: [
    CommonModule,
    UpcomingDrawsRoutingModule
  ]
})
export class UpcomingDrawsModule { }
