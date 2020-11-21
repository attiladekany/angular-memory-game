import { Component } from '@angular/core';
import { GameSettingsFacade } from '../store/game.facade';

@Component({
  selector: 'game-page',
  templateUrl: 'game-page.component.html',
  styleUrls: ['game-page.component.scss'],
})
export class GamePageComponent {
  constructor(public gameSettingsFacade: GameSettingsFacade) {}
}
