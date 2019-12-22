import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ILeaderBoard } from 'src/app/models/ileader-board';
import { ApiConnectionsService } from './api-connections.service';
import { BehaviorSubject } from 'rxjs';
import { IClickStorage } from 'src/app/models/iclick-storage';
import { IClick } from 'src/app/models/iclick';
import { IClickRequest } from 'src/app/models/iclick-request';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public session: Guid = Guid.create();
  public myClicksStorage: IClickStorage[] = [];
  public selectedTeam: string = null;
  public leaderBoard: BehaviorSubject<ILeaderBoard[]> = new BehaviorSubject<ILeaderBoard[]>([]);

  constructor(private _data: ApiConnectionsService) {
    this.getLeaderBoard();
    this.getClickStorage();
  }

  public get myClicks(): number {
    if (!!this.myClicksStorage && this.myClicksStorage.length > 0) {
      const myClicksStorage: IClickStorage = this.myClicksStorage.find((clickStorage: IClickStorage) => clickStorage.team === this.selectedTeam);
      return myClicksStorage ? myClicksStorage.count : 0;
    } else {
      return 0;
    }
  }

  private getLeaderBoard(): void {
    this._data.getLeaderBoard().subscribe((leaderBoard: ILeaderBoard[]) => {
      this.leaderBoard.next(leaderBoard);
    });
  }

  private getClickStorage(): void {
    const clicks: string = localStorage.getItem('clicks');
    let model: IClickStorage[] = !clicks ? [] : JSON.parse(atob(clicks));
    this.myClicksStorage = model;
  }

  public findTeam(name: string): ILeaderBoard {
    return this.leaderBoard.getValue().find((leaderBoard: ILeaderBoard) => leaderBoard.team === name);
  }

  public addClick(): void {
    this.addTeamClick();
  }

  private get findTeamIndex(): number {
    return this.leaderBoard.getValue().findIndex((leaderBoard: ILeaderBoard) => leaderBoard === this.findTeam(this.selectedTeam));
  }

  private addTeamClick(): void {
    const model: IClickRequest = {
      team: this.selectedTeam,
      session: ''
    };
    this._data.postClick(model).subscribe(() => {
      this.leaderBoard.getValue()[this.findTeamIndex].clicks++;
      this.addMyClick();
    });
  }

  private get findMyClicks(): IClickStorage {
    return this.myClicksStorage.find((clickStorage: IClickStorage) => clickStorage.team === this.selectedTeam);
  }

  private addMyClick() {
    const myClicks: IClickStorage = this.findMyClicks;
    if (!myClicks) {
      this.myClicksStorage.push({
        count: 1,
        team: this.selectedTeam
      });
    } else {
      const index: number = this.myClicksStorage.findIndex((clickStorage: IClickStorage) => clickStorage.team === myClicks.team);
      this.myClicksStorage[index].count++;
    }
    localStorage.setItem('clicks', btoa(JSON.stringify(this.myClicksStorage)));
  }
}
