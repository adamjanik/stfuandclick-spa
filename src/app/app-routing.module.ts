import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}, {
  path: ':id',
  component: TeamDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
