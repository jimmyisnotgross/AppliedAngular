import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div data-testid="counter-feature">
      Counter Stuff Goes Here
      <a routerLink="ui">UI</a>
      <router-outlet></router-outlet>
    </div>
    <p>counter works!</p>
  `,
  styles: ``,
})
export class CounterComponent {}
