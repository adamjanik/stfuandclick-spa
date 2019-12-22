import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { ILeaderBoard } from 'src/app/models/ileader-board';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-chart',
  templateUrl: './team-chart.component.html',
  styleUrls: ['./team-chart.component.scss']
})
export class TeamChartComponent {
  @Input() public items: ILeaderBoard[];
  @Input() public highlighted: number;

  constructor(private _router: Router) { }

  /* open team detail */
  public openTeam(name: string): void {
    this._router.navigate(['/', encodeURIComponent(name)]);
  }
}
