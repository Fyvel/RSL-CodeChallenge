import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingDrawsComponent } from './upcoming-draws.component';


const routes: Routes = [
  { path: '', component: UpcomingDrawsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingDrawsRoutingModule { }
