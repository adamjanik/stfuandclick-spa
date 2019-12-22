import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    public _game: GameService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this._route.params.subscribe((params: Params) => {
      this._game.selectedTeam = params['team'];
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  get linkName() {
    return this._game.selectedTeam;
  }
}
