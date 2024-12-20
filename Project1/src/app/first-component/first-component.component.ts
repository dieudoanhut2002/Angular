import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  template: '<p>{{title()}}</p>',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
title = signal('Test First Component');
}

export { Component };
