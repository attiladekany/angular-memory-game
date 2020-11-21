import { Component } from '@angular/core';
import { GameSettingsFacade } from 'src/app/store/game.facade';

@Component({
  selector: 'card-number-selector',
  templateUrl: 'card-number-selector.component.html',
  styleUrls: ['card-number-selector.component.scss'],
})
export class CardNumberSelectorComponent {
  constructor(private gameSettingsFacade: GameSettingsFacade) {}

  options: Options[] = [
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
  ];

  public selectionChange($event: any): void {
    if ($event && $event.value) {
      const selectedCardNumber = $event.value * 2;
      this.gameSettingsFacade.selectCardNumber(selectedCardNumber);
    }
  }
}

interface Options {
  value: string;
  viewValue: string;
}
