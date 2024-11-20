import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ui',
  template: `
    <div data-testid="counter-feature-ui">
      <button
        class="btn btn-primary"
        (click)="decrement()"
        [disabled]="isDecrementDisabled()"
      >
        -
      </button>
      <span data-testid="current">{{ counter() }}</span>
      <button class="btn btn-primary" (click)="increment()">+</button>
    </div>
    <p>ui works!</p>
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);

  isDecrementDisabled = computed(() => this.counter() <= 0);

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => (value > 0 ? value - 1 : 0));
  }
}
