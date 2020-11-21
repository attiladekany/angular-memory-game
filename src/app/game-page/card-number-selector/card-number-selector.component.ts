import { Component } from '@angular/core';

@Component({
  selector: 'card-number-selector',
  templateUrl: 'card-number-selector.component.html',
  styleUrls: ['card-number-selector.component.scss'],
})
export class CardNumberSelectorComponent {
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
}

interface Options {
  value: string;
  viewValue: string;
}
