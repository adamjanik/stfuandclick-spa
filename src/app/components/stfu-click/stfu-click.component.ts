import { Component, EventEmitter, Output, Input } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { ILeaderBoard } from 'src/app/models/ileader-board';

@Component({
  selector: 'app-stfu-click',
  templateUrl: './stfu-click.component.html',
  styleUrls: ['./stfu-click.component.scss']
})
export class StfuClickComponent {
  @Input() public teamName: string = null;
  @Output() public onClick = new EventEmitter();

  constructor(private _game: GameService) { }

  public click(): void {
    this.onClick.emit();
  }

  public get myClicks(): number {
    return this._game.myClicks;
  }

  public get teamClicks(): number {
    const team: ILeaderBoard = this._game.findTeam(decodeURIComponent(this.teamName));
    return !team ? 0 : team.clicks;
  }

  public addMagicSpaceToNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
