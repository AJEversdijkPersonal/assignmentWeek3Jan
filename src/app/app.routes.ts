import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'transactions-timeline',
        loadComponent: () =>
          import(
            './components/transactions-timeline-page/transactions-timeline-page.component'
          ).then((c) => c.TransactionsTimelinePageComponent),
      },
    ],
  },
];
