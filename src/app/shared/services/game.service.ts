import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public session: Guid = Guid.create();
  public ownClicks: number = 0;
  public selectedTeam: string = null;
}
