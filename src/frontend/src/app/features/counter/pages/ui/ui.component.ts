import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button class="btn btn-primary">-</button>
      <span data-testid="current">0</span>
      <button class="btn btn-primary">+</button>
    </div>
    <p>ui works!</p>
  `,
  styles: ``,
})
export class UiComponent {}
