import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GameSettingsFacade } from './store/game.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isCardNumberSelectorVisible: boolean = false;
  constructor(
    private router: Router,
    // public gameSettingsFacade: GameSettingsFacade
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        if (e['url']?.includes('game-page')) {
          this.isCardNumberSelectorVisible = true;
        } else {
          this.isCardNumberSelectorVisible = false;
        }
      });
  }
  title = 'angular-memory-game-app';
}
