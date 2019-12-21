import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiConnectionsService } from 'src/app/shared/services/api-connections.service';
import { ILeaderBoard } from 'src/app/models/ileader-board';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  leaderBoard: ILeaderBoard[];
  leaderBoardSubscribe: Subscription;

  constructor(private _data: ApiConnectionsService) { }

  ngOnInit() {
    this.getLeaderBoard();
  }

  ngOnDestroy(): void {
    this.leaderBoardSubscribe.unsubscribe();
  }

  private getLeaderBoard(): void {
    this.leaderBoardSubscribe = this._data.getLeaderBoard().subscribe((leaderBoard: ILeaderBoard[]) => {
      this.leaderBoard = leaderBoard.slice(0, 10);
    });
  }
}
