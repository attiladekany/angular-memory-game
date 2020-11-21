import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { GameSettingsFacade } from '../store/game.facade';

@Component({
  selector: 'game-page',
  templateUrl: 'game-page.component.html',
  styleUrls: ['game-page.component.scss'],
})
export class GamePageComponent implements OnDestroy {
  public destroy$$: Subject<any> = new Subject();
  constructor(public gameSettingsFacade: GameSettingsFacade) {}

  public restartClicked(): void {
    this.gameSettingsFacade.cardNumber$.subscribe((v) => {
      this.gameSettingsFacade.restartGame(v);
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
  }
}
