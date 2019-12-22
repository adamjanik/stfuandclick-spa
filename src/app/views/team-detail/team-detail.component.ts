import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from 'src/app/shared/services/game.service';
import { ILeaderBoard } from 'src/app/models/ileader-board';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  public highlighted: number = 3;

  constructor(
    private _route: ActivatedRoute,
    public _game: GameService
  ) { }

  public ngOnInit(): void {
    this.routeSubscription = this._route.params.subscribe((params: Params) => {
      this._game.selectedTeam = params['team'];
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this._game.selectedTeam = null;
  }

  /* get Array of LeaderBoard where is selected my team */
  public get myTeamChart(): ILeaderBoard[] {
    let startIndex: number = 0;
    let endIndex: number = 7;
    if (this._game.findTeamIndex >= 3) {
      startIndex = this._game.findTeamIndex - 3;
      endIndex = this._game.findTeamIndex + 4;
      this.highlighted = 3;
    } else {
      this.highlighted = this._game.findTeamIndex;
    }
    return this._game.leaderBoard.getValue().slice(startIndex, endIndex);
  }

  /* get team name */
  public get teamName(): string {
    return this._game.selectedTeam;
  }

  /* add click for team */
  public click(): void {
    this._game.addClick();
  }
}
