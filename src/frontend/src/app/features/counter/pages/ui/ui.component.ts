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
    <div data-testid="fizzBuzz">{{ fizzBuzz() }}</div>
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);

  isDecrementDisabled = computed(() => this.counter() <= 0);

  fizzBuzz = computed(() => {
    const value = this.counter();
    if (value === 0) return '';
    if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
    if (value % 3 === 0) return 'Fizz';
    if (value % 5 === 0) return 'Buzz';
    return '';
  });

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => (value > 0 ? value - 1 : 0));
  }
}
