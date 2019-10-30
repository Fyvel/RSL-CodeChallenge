import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'results' },
  // { path: 'home', loadChildren: () => import('./core/home').then(m => m.HomeModule) },
  { path: 'results', loadChildren: () => import('./core/latest-results').then(m => m.LatestResultsModule) },
  { path: 'draws', loadChildren: () => import('./core/upcoming-draws').then(m => m.UpcomingDrawsModule) },
  {
    path: '**',
    redirectTo: 'results'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
