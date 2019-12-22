import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-title',
  templateUrl: './team-title.component.html',
  styleUrls: ['./team-title.component.scss']
})
export class TeamTitleComponent {
  @Input() linkName: string;

  get name(): string {
    return encodeURIComponent(this.linkName);
  }

  get link(): string {
    return window.location.href;
  }
}
