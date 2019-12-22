import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { ILeaderBoard } from 'src/app/models/ileader-board';

@Component({
  selector: 'app-team-chart',
  templateUrl: './team-chart.component.html',
  styleUrls: ['./team-chart.component.scss']
})
export class TeamChartComponent {
  @Input() items: ILeaderBoard[];
}
