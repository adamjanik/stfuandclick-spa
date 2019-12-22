import { Component, Input } from '@angular/core';
import { ILeaderBoard } from 'src/app/models/ileader-board';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() public tableItems: ILeaderBoard[] = null;
  @Input() public teamName: string = null;
}
