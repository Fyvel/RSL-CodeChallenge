import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestResultsComponent } from './latest-results.component';


const routes: Routes = [
  { path: '', component: LatestResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestResultsRoutingModule { }
