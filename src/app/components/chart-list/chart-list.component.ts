import { Component, OnInit, Input } from '@angular/core';
import { ILeaderBoard } from 'src/app/models/modelsApi/ileader-board';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss']
})
export class ChartListComponent {
  @Input() leaderBoard: ILeaderBoard[];
}
