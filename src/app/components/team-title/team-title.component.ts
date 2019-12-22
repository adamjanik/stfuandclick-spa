import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-title',
  templateUrl: './team-title.component.html',
  styleUrls: ['./team-title.component.scss']
})
export class TeamTitleComponent {
  @Input() private teamName: string;

  /* get decoded team name */
  public get name(): string {
    return decodeURIComponent(this.teamName);
  }

  /* get full link to team detail screen */
  public get link(): string {
    return window.location.href;
  }
}
