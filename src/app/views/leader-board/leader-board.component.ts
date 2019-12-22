import { Component } from '@angular/core';
import { ILeaderBoard } from 'src/app/models/ileader-board';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent {
  constructor(private _game: GameService) { }

  public get top10Chart(): ILeaderBoard[] {
    return this._game.leaderBoard.getValue().slice(0, 10);
  }
}
