import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui/ui.component';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'ui',
        component: UiComponent,
      },
    ],
  },
];
