import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ILeaderBoard } from 'src/app/models/ileader-board';
import { ApiConnectionsService } from './api-connections.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public session: Guid = Guid.create();
  public ownClicks: number = 0;
  public selectedTeam: string = null;
  public leaderBoard: BehaviorSubject<ILeaderBoard[]> = new BehaviorSubject<ILeaderBoard[]>([]);

  constructor(private _data: ApiConnectionsService) {
    this.getLeaderBoard();
  }

  private getLeaderBoard(): void {
    this._data.getLeaderBoard().subscribe((leaderBoard: ILeaderBoard[]) => {
      this.leaderBoard.next(leaderBoard);
    });
  }
}
