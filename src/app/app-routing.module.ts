import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';
import { LeaderBoardComponent } from './views/leader-board/leader-board.component';


const routes: Routes = [{
  path: '',
  component: LeaderBoardComponent,
}, {
  path: ':team',
  component: TeamDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
