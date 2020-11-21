import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header-panel',
  templateUrl: 'header-panel.component.html',
  styleUrls: ['header-panel.component.scss'],
})
export class HeaderPanelComponent {
  public isCardNumberSelectorVisible: boolean = false;
  constructor(
    private router: Router // public gameSettingsFacade: GameSettingsFacade
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
}
