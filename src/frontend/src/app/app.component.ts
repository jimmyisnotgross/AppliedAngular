import { Component } from '@angular/core';

import { WelcomeComponent } from './components/welcome.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <main class="container mx-auto">
      <app-welcome />
    </main>
  `,
  styles: [],
  imports: [WelcomeComponent, NavBarComponent],
})
export class AppComponent {}
